import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-crear-medidor',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-medidor.component.html',
  styleUrl: './crear-medidor.component.css'
})
export class CrearMedidorComponent {
  router = inject(Router);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    numeroMedidor: ['', {validators: [Validators.required]}]
  })
  guardarCambios(){
    this.router.navigate(['/medidores/medidores'])
  }

  obtenerErrorCampoNumeroMedidor(): string {
    let numeroMedidor = this.form.controls.numeroMedidor;

    if(numeroMedidor.hasError('required')){
      return "El campo Numero de Medidor es obligatorio";
    }

    return "";
  }
}
