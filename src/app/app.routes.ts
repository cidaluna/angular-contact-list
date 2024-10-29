import { Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/listar', pathMatch: 'full'
  },
  {
    path: 'listar', component: ContactListComponent
  },
  {
    path: 'adicionar', component: ContactFormComponent
  },
  {
    path: 'details/:id', component: ContactDetailsComponent
  }
];
