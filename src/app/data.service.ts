import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/veiculos`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/veiculos/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/veiculos`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/veiculos/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/veiculos/${id}`);
  }
}
