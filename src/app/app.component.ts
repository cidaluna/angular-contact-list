import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SpacerComponent } from './components/spacer/spacer.component';
import { ContactComponent } from './components/contact/contact.component';
import { IContact } from './models/contact.interface';
import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent,
    HeaderComponent, SpacerComponent, ContactComponent, FormsModule, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: IContact[] = agenda;

  filterTextSearch: string = '';

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
