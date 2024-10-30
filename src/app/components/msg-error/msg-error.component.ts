import { CommonModule } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-msg-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg-error.component.html',
  styleUrl: './msg-error.component.css'
})
export class MsgErrorComponent {
  @Input({ required: true }) controlProps!: FormControl;
  @Input({ required: true }) errorsMapProps!: { [key: string]: string };

  get errorMessages(): string[] {
    if (!this.controlProps || !this.controlProps.errors) return [];
    return Object.keys(this.controlProps.errors).map(errorKey => this.errorsMapProps[errorKey]);
  }

}
