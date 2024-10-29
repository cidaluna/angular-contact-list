import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { CommonModule } from '@angular/common';
import { IContact } from '../../models/contact.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { SpacerComponent } from "../../components/spacer/spacer.component";

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, ContainerComponent, ContactListComponent, RouterLink, SpacerComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit{

  contact!: IContact;

  constructor(private _activatedRoute: ActivatedRoute,
              private _contactService: ContactService,
              private _router: Router
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

  deleteContact(){
    if(this.contact.id){
      this._contactService.deleteById(this.contact.id).subscribe(() => {
        alert('Contato excluído com sucesso!');
        this._router.navigateByUrl('/listar');
      });
    }
  }
}
