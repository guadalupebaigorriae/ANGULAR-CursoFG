import { Component, inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MedidoresService } from '../medidores.service';
import { environment } from '../../../environments/environment.development';
import { MedidorDTO } from '../medidores';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PaginacionDTO } from '../../Compartidos/Modelos/PaginacionDTO';

@Component({
  selector: 'app-medidores',
  imports: [MatPaginatorModule ,MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './medidores.component.html',
  styleUrl: './medidores.component.css'
})
export class MedidoresComponent implements OnInit {
  displayedColumns: string[] = ['acciones', 'numeroMedidor', 'modelo', 'sgc', 'asignadoa'];
  dataSource = new MatTableDataSource<MedidorDTO>(); 
  medidores: MedidorDTO[] = [];
  paginacion: PaginacionDTO = {pagina: 1, recordsPorPagina:5}
  cantidadTotalRegistros!: number;

  constructor(private medidoresService: MedidoresService) {}
  ngOnInit(): void {
    this.cargarMedidores();
  }

  cargarMedidores() {
    this.medidoresService.obtenerPaginado(this.paginacion).subscribe(
      (respuesta: HttpResponse<MedidorDTO[]>) => { 
        this.medidores = respuesta.body as MedidorDTO[]; 
        this.dataSource.data = respuesta.body as MedidorDTO[]; 
        const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
        this.cantidadTotalRegistros = parseInt(cabecera, 10);
      },
      (error) => {
        console.error('Error al cargar medidores:', error); 
      }
    );
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginacion = {pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize};
    this.cargarMedidores();
  }
}
