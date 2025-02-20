import { inject, Injectable } from '@angular/core';
import { MedidorCreacionDTO, MedidorDTO, MedidorEdicionDTO } from './medidores';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../Compartidos/Modelos/PaginacionDTO';
import { construirQueryParams } from '../Compartidos/Funciones/construirQueryParams';
@Injectable({
  providedIn: 'root'
})
export class MedidoresService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/Medidores'

  constructor() { }

  public obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<MedidorDTO[]>>{
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<MedidorDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }

  public crear(medidor: MedidorCreacionDTO){
    return this.http.post(this.urlBase, medidor);
  }

  public getMedidores(): Observable<MedidorDTO[]> {
    return this.http.get<MedidorDTO[]>(this.urlBase); 
  }

  public editar(medidor: MedidorEdicionDTO){
    return this.http.put(this.urlBase, medidor);
  }
}
