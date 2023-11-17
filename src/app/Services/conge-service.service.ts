// congé.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from '../Classes/conge';

@Injectable({
  providedIn: 'root',
})
export class CongeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getConges(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conges`);
  }
  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/conges/${id}`);
  }

  createConge(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(`${this.apiUrl}/conges`, conge);
  }

  updateConge(id: number, conge: Conge): Observable<Conge> {
    return this.http.put<Conge>(`${this.apiUrl}/conges/${id}`, conge);
  }

  deleteConge(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/conges/${id}`);
  }

  validerConge(idConge: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/conges/${idConge}/valider`, {});
  }

  rejeterConge(idConge: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/conges/${idConge}/rejeter`, {});
  }
}
