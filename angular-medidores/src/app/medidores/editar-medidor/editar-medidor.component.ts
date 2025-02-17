import { Component, inject, Input, input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { soloNumerosValidator } from '../../Compartidos/Funciones/validaciones';
import { EventEmitter } from '@angular/core';
import { MedidorDTO } from '../medidores';

@Component({
  selector: 'app-editar-medidor',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './editar-medidor.component.html',
  styleUrl: './editar-medidor.component.css'
})
export class EditarMedidorComponent implements OnInit {

  ngOnInit(): void {
    if (this.modelo !== undefined){
        this.form.patchValue(this.modelo);
    }
  }

  @Input() modelo?: MedidorDTO;
  @Output() posteoFormulario = new EventEmitter<MedidorDTO>();
  
  router = inject(Router);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    numeroMedidor: ['', {validators: [Validators.required, soloNumerosValidator]}]
  })
  guardarCambios(){
    const medidor = this.form.value as MedidorDTO;
    this.posteoFormulario.emit(medidor);
    this.router.navigate(['/medidores/medidores'])
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
