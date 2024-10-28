import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SpacerComponent } from "../../components/spacer/spacer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { idadeValidator } from '../../validators/idade.validator';
import { celularValidator } from '../../validators/celular.validator';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    SpacerComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor(){
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
    console.log('Salvar contato ', this.contactForm.value)
  }

  cancel(){
    console.log('Submissão cancelada!')
  }
}
