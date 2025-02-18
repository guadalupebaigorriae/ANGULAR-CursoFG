import { inject, Injectable } from '@angular/core';
import { MedidorDTO } from './medidores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedidoresService {

  private http = inject(HttpClient);
  constructor() { }

  public obtenerTodos(): Observable<MedidorDTO[]>{
    return this.http.get<MedidorDTO[]>("https://localhost:44371/api/Medidores");
  }
}
