import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SpacerComponent } from "../../components/spacer/spacer.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ContainerComponent, SpacerComponent, ReactiveFormsModule ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor(){
    this.contactForm = new FormGroup({
      nome: new FormControl('Cida'),
      telefone: new FormControl('99 99191-9919'),
      email: new FormControl(''),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Olá Mundo'),
    });
  }

}
