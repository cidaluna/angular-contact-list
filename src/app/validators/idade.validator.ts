import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function idadeValidator(minAge: number, maxAge: number) {
  return (control: AbstractControl) => {
    const birthdate = new Date(control.value);
    const today = new Date();

    const age = today.getFullYear() - birthdate.getFullYear();
    const isBeforeBirthdayThisYear =
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate());

    const actualAge = isBeforeBirthdayThisYear ? age - 1 : age;

    const idadeInvalida = actualAge < minAge || actualAge > maxAge;
    return idadeInvalida ? { idadeInvalida: true } : null;
  };
}
