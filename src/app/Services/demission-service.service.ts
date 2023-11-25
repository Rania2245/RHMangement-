import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demission } from '../Classes/demission';

@Injectable({
  providedIn: 'root'
})
export class DemissionServiceService {
private api='http://localhost:4200/employees';
constructor(private http: HttpClient) {}
createDemission(employeeId: number, data: any): Observable<Demission> {
  const url = `${this.api}/createDemission`; // Replace with your actual API endpoint
  return this.http.post<Demission>(url, { employeeId, data });
}
}
