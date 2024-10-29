import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../../components/contact/contact.component';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IContact } from '../../models/contact.interface';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import agenda from '../../agenda.json';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContainerComponent,
    HeaderComponent,
    SpacerComponent,
    ContactComponent,
    FormsModule,
    ContactFormComponent,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  //contacts: IContact[] = agenda;
  contacts: IContact[] = [];

  filterTextSearch: string = '';

  constructor(private _contactService: ContactService){}

  ngOnInit(){
    this._contactService.getAll().subscribe(listContacts => {
      this.contacts = listContacts;
    });
  }

  removeAccentuation(text: string): string{
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactByTextSearch(): IContact[]{
    if(!this.filterTextSearch){
      return this.contacts;
    }
    return this.contacts.filter(contact => {
      return this.removeAccentuation(contact.nome).toLowerCase()
      .includes(this.removeAccentuation(this.filterTextSearch).toLowerCase());
    })
  }

  filterContactByInitialLetter(letter: string): IContact[]{
    return this.filterContactByTextSearch().filter(contact => {
      return this.removeAccentuation(contact.nome).toLowerCase().startsWith(this.removeAccentuation(letter).toLowerCase());
    });
  }

}
