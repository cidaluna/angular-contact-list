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
}
