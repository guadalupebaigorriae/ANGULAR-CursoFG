import { Component, inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MedidoresService } from '../medidores.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-medidores',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './medidores.component.html',
  styleUrl: './medidores.component.css'
})
export class MedidoresComponent {
  medidoresService = inject(MedidoresService)

  constructor(){
    this.medidoresService.obtenerTodos().subscribe(medidores =>{
      console.log(medidores);
    })
    
  }

}
