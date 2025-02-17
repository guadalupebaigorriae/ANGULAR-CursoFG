import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {FiltroMedidores } from '../filtro-medidores/FiltroMedidores'
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-filtro-medidores',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatTableModule],
  templateUrl: './filtro-medidores.component.html',
  styleUrl: './filtro-medidores.component.css'
})
export class FiltroMedidoresComponent implements OnInit {
  displayedColumns: string[] = ['numeroMedidor'];
  ngOnInit(): void {
    this.form.valueChanges.subscribe(valores => {
      this.medidores = this.medidoresOriginal;
      this.buscarMedidores(this.form.value as FiltroMedidores)
    })
  }

  buscarMedidores(valores: FiltroMedidores){
    if (valores.numeroMedidor){
      this.medidores = this.medidores.filter(medidor => medidor.numeroMedidor.indexOf(valores.numeroMedidor) !== -1);
    }
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    numeroDeMedidor: ''
  })


  
  medidores = [
    {numeroMedidor:'292828'},
    {numeroMedidor:'192828'},
    {numeroMedidor:'992828'},
    {numeroMedidor:'892828'},
    {numeroMedidor:'792828'},
    {numeroMedidor:'692828'},
    {numeroMedidor:'592828'},
    {numeroMedidor:'492828'},
  ]

  medidoresOriginal = [
    {numeroMedidor:'292828'},
    {numeroMedidor:'192828'},
    {numeroMedidor:'992828'},
    {numeroMedidor:'892828'},
    {numeroMedidor:'792828'},
    {numeroMedidor:'692828'},
    {numeroMedidor:'592828'},
    {numeroMedidor:'492828'},
  ]
}
