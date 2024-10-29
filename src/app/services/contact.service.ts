import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private _http: HttpClient){}

  getAll(): Observable<IContact[]>{
    return this._http.get<IContact[]>(this.API);
  }

  add(contact: IContact): Observable<IContact>{
    return this._http.post<IContact>(this.API, contact);
  }

  getById(id: number): Observable<IContact>{
    const url = `${this.API}/${id}`;
    return this._http.get<IContact>(url);
  }

  deleteById(id: number): Observable<IContact>{
    const url = `${this.API}/${id}`;
    return this._http.delete<IContact>(url);
  }

  edit(contact: IContact): Observable<IContact>{
    const url = `${this.API}/${contact.id}`;
    return this._http.put<IContact>(url, contact);
  }

  // para aproveitar o mesmo formulário, se existir id chama edit, caso contrário chama add
  addOrEdit(contact: IContact): Observable<IContact>{
    if(contact.id){
      return this.edit(contact);
    }else{
      return this.add(contact);
    }
  }

}
