import { inject, Injectable } from '@angular/core';
import { MedidorDTO } from './medidores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class MedidoresService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/Medidores'

  constructor() { }

  public obtenerTodos(): Observable<MedidorDTO[]>{
    return this.http.get<MedidorDTO[]>(this.urlBase);
  }
}
