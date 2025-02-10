import { FormControl, ValidationErrors } from '@angular/forms';

export function soloNumerosValidator(control: FormControl): ValidationErrors | null {
    const regex = new RegExp('^[0-9]*$');
    return regex.test(control.value) ? null : { soloNumerosValidator: { mensaje: 'Solo se permiten valores númericos.'} };
}