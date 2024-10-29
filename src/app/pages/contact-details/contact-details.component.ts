import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { CommonModule } from '@angular/common';
import { IContact } from '../../models/contact.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, ContainerComponent, ContactListComponent, RouterLink],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit{

  contact: IContact = {
    id: 1,
    nome: "dev",
    celular: "(16) 95151-5656",
    email: "dev@test.com",
    aniversario: "04/18/1987",
    redes: "",
    observacoes: ""
  }

  constructor(private _activatedRoute: ActivatedRoute,
              private _contactService: ContactService
  ){}

  ngOnInit(){
    this.startDetails();
  }

  startDetails(){
    const id = this._activatedRoute.snapshot.paramMap.get('id'); // capturando o parâmetro id na rota
    if(id){
      this._contactService.getById(parseInt(id)).subscribe((data) => {
        this.contact = data
      });
    }
  }
}
