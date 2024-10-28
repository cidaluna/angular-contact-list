import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function celularValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const celularPattern = /^\(\d{2}\) 9\d{4}-\d{4}$/;

    // Verifica se o valor do controle corresponde ao padrão de celular brasileiro
    const isValid = celularPattern.test(control.value);

    // Retorna o erro se o número não for válido
    return isValid ? null : { celularInvalido: true };
  };
}
