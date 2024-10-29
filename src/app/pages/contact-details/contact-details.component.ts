import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { CommonModule } from '@angular/common';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, ContainerComponent, ContactListComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

  contact: IContact = {
    id: 1,
    nome: "dev",
    celular: "(16) 95151-5656",
    email: "dev@test.com",
    aniversario: "04/18/1987",
    redes: "",
    observacoes: ""
  }
}
