import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() nameProps: string = '';
  @Input() telProps: string = '';
  @Input() idProps?: number;
  @Input() avatarProps: string | ArrayBuffer = '';
}
