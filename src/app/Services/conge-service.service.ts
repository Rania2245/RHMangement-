// congé.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from '../Classes/conge';

@Injectable({
  providedIn: 'root',
})
export class CongeService {
  private apiUrl = 'http://localhost:3001/DemandeConge';

  constructor(private http: HttpClient) {}

  getConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiUrl}/leave-requests`); // Assurez-vous que l'URL correspond à votre backend
  }

  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/leave-requests/${id}`); // Assurez-vous que l'URL correspond à votre backend
  }

 /* createConge(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(`${this.apiUrl}/leave-requests`, conge); // Assurez-vous que l'URL correspond à votre backend
  }
*/
createLeaveRequest(employeeId: number, data: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/${employeeId}/leave-request`, data);
}
  updateConge(id: number, conge: Conge): Observable<Conge> {
    return this.http.patch<Conge>(`${this.apiUrl}/leave-requests/${id}`, conge);
  }

  deleteConge(id: number): Observable<Conge> {
    return this.http.delete<Conge>(`${this.apiUrl}/leave-requests/${id}`);
  }

  validerConge(idConge: number): Observable<Conge> {
    return this.http.patch<Conge>(`${this.apiUrl}/accept-leave-request/${idConge}`, {});
  }

 /* rejeterConge(idConge: number): Observable<Conge> {
    return this.http.patch<Conge>(`${this.apiUrl}/leave-requests/${idConge}/reject`, {});
  }*/
  rejectLeaveRequest(idConge: number): Observable<any> {
    const url = `${this.apiUrl}/reject-leave-request/${idConge}`;
    return this.http.patch(url, {});
  }
}
