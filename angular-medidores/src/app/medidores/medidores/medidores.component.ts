import { Component, inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MedidoresService } from '../medidores.service';
import { environment } from '../../../environments/environment.development';
import { MedidorDTO } from '../medidores';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-medidores',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './medidores.component.html',
  styleUrl: './medidores.component.css'
})
export class MedidoresComponent implements OnInit {
  displayedColumns: string[] = ['acciones', 'numeroMedidor', 'modelo', 'sgc', 'asignadoa'];
  dataSource = new MatTableDataSource<MedidorDTO>(); 
  medidores: MedidorDTO[] = [];

  constructor(private medidoresService: MedidoresService) {}

  ngOnInit(): void {
    this.cargarMedidores();
  }

  cargarMedidores() {
    this.medidoresService.getMedidores().subscribe(
      (medidores) => { 
        this.medidores = medidores; 
        this.dataSource.data = medidores; 
      },
      (error) => {
        console.error('Error al cargar medidores:', error); 
      }
    );
  }
}
