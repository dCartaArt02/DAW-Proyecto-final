// desarrollador.service.ts
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Desarrollador {
  id: string;
  nombre: string;
  rol: string;
  url: string;
}

export class DesarrolladorService {
  private http = inject(HttpClient);
  private baseUrl = 'https://680bce112ea307e081d262bf.mockapi.io/api/desarrolladores/'; 

  getDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(`${this.baseUrl}/desarrolladores`);
  }
}
