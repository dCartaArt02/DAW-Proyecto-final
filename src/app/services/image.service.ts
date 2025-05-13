import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://680bce112ea307e081d262bf.mockapi.io/api/example/ProyectoCatedra/';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
