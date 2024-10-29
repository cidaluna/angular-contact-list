import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SpacerComponent } from "../../components/spacer/spacer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { idadeValidator } from '../../validators/idade.validator';
import { celularValidator } from '../../validators/celular.validator';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    SpacerComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(private _contactService: ContactService,
    private _router: Router
  ){}

  ngOnInit(){
    this.startForm();
  }

  startForm(){
    this.contactForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Zà-úÀ-Ú\\s\\-']+$"),]),
      celular: new FormControl(null, [Validators.required, celularValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('', [Validators.required, idadeValidator(15,100)]),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  saveContact(){
    if(this.contactForm.invalid){
      return;
    }
    const newContact = this.contactForm.value;
    this._contactService.add(newContact);
    this.contactForm.reset();
    this._router.navigateByUrl('/listar');
    console.log('Salvar contato ', this.contactForm.value)
  }

  cancel(){
    this.contactForm.reset();
    console.log('Submissão cancelada!')
  }
}
