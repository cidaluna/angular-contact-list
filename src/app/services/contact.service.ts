import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: IContact[] = [
    {"id": 1, "nome": "Antônia", "telefone": "29 278869420", "email": "teste@luna.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email": "tonho@teste.com"},
  ];

  constructor() {
    // Obter os dados do Localstorage e converter para objeto
    const contactsLocalstorageString = localStorage.getItem('contacts');
    const contactsLocalstorage = contactsLocalstorageString ?
          JSON.parse(contactsLocalstorageString) : null; //converte p objeto

    this.contacts = contactsLocalstorage || null;

    //Salvar os contatos no localstorage no formato string (lá no localstorage só salva como string)
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  ngOnInit(){

  }

  getAll(){
    return this.contacts;
  }

  add(contact: IContact){
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
