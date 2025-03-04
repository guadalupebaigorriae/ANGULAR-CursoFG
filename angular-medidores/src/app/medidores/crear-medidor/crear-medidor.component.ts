import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { soloNumerosValidator } from '../../Compartidos/Funciones/validaciones';
import { MedidoresService } from '../medidores.service';
import { MedidorCreacionDTO } from '../medidores';

@Component({
  selector: 'app-crear-medidor',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-medidor.component.html',
  styleUrl: './crear-medidor.component.css'
})
export class CrearMedidorComponent {
  private router = inject(Router);
  private medidoresService = inject(MedidoresService);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    numeroMedidor: [''], 
    modelo: [''], 
    sgc: [''], 
    asignadoACliente: [null] 
  });
  guardarCambios(){
    const medidor = this.form.value as MedidorCreacionDTO; 
    this.medidoresService.crear(medidor).subscribe(() => {
      this.router.navigate(['/medidores/medidores'])
    });
  }

  obtenerErrorCampoNumeroMedidor(): string {
    let numeroMedidor = this.form.controls.numeroMedidor;

    if(numeroMedidor.hasError('required')){
      return "El campo Numero de Medidor es obligatorio";
    }

    if(numeroMedidor.hasError('soloNumerosValidator')){
      return numeroMedidor.getError('soloNumerosValidator').mensaje;
    }
    return "";
  }
}
