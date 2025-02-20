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
import { catchError, of } from 'rxjs';

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

  borrar(numeroMedidor: string){
    this.medidoresService.borrar(numeroMedidor).pipe(
      catchError(error => {
          console.error("Error al borrar medidor:", error); // Loguea el error en la consola
          // Aquí puedes mostrar un mensaje de error al usuario, por ejemplo:
          alert("Error al borrar el medidor. Por favor, inténtalo de nuevo.");
          return of(null); // Devuelve un observable que emite null para evitar que el observable principal falle
      })
  ).subscribe(() => {
      this.paginacion = { pagina: 1, recordsPorPagina: 5 };
      this.cargarMedidores();
  });
    
  }
}
