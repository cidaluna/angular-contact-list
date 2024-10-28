import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SpacerComponent } from './components/spacer/spacer.component';
import { ContactComponent } from './components/contact/contact.component';
import { IContact } from './models/contact.interface';
import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent,
    HeaderComponent, SpacerComponent, ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: IContact[] = agenda;

  filterContactByInitialLetter(letter: string): IContact[]{
    return this.contacts.filter(contact => {
      return contact.nome.toLowerCase().startsWith(letter);
    });
  }
}
