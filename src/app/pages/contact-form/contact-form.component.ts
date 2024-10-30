import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SpacerComponent } from "../../components/spacer/spacer.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { idadeValidator } from '../../validators/idade.validator';
import { celularValidator } from '../../validators/celular.validator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { MsgErrorComponent } from "../../components/msg-error/msg-error.component";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    SpacerComponent,
    ReactiveFormsModule,
    RouterLink, MsgErrorComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{
  contactForm!: FormGroup;
  cel: string = '(XX) 9XXXX-XXXX';

  constructor(private _contactService: ContactService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _fb: FormBuilder
  ){}

  ngOnInit(){
    this.startForm();
    this.loadDataContact();
  }

  startForm(){
    this.contactForm = this._fb.group({
      nome: ['', [Validators.required, Validators.pattern("^[a-zA-Zà-úÀ-Ú\\s\\-']+$"),]],
      avatar: ['', Validators.required],
      celular: [null, [Validators.required, celularValidator()]],
      email: ['', [Validators.required, Validators.email]],
      aniversario: ['', [Validators.required, idadeValidator(15,100)]],
      redes: [''],
      observacoes: [''],
    });
  }

  // lançar mensagens de erro para controle dos campos do form
  checkFormControl(nomeCampo: string): FormControl{
    const control = this.contactForm.get(nomeCampo);
    if(!control){
      throw new Error('Controle de formulário não encontrado: '+nomeCampo);
    }
    return control as FormControl;
  }

  // se existir id e dados, carregá-los no formulário
  loadDataContact(){
    const id = this._activatedRoute.snapshot.paramMap.get('id'); // capturando o parâmetro id na rota
    if(id){
      this._contactService.getById(parseInt(id)).subscribe((data) => {
        this.contactForm.patchValue(data)
      });
    }
  }

  saveContact(){
    if(this.contactForm.invalid){
      return;
    }
    const newContact = this.contactForm.value;
    const id = this._activatedRoute.snapshot.paramMap.get('id'); // capturando o parâmetro id na rota
    newContact.id = id ? parseInt(id) : null;

    this._contactService.addOrEdit(newContact).subscribe(() => {
      this.contactForm.reset();
      this._router.navigateByUrl('/listar');
    });
  }

  selectFile(event: any){
    const file: File = event.target.files[0];
    if(file){
      this.readFile(file)
    }
  }

  readFile(file: File){
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.result){
        this.contactForm.get('avatar')?.setValue(reader.result);
      }
    }
    // converte img para formato base64
    reader.readAsDataURL(file);
  }

  cancel(){
    this.contactForm.reset();
    this._router.navigateByUrl('/listar');
    console.log('Submissão cancelada!');
  }
}
