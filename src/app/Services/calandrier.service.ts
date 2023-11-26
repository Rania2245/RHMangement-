import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Classes/employe';
import { CalendrierEmp } from '../Classes/calendrier-emp';

const URL: string = 'http://localhost:3000/calendar'
@Injectable({
  providedIn: 'root'
})
export class CalandrierService {

  constructor(private http: HttpClient) { }
  AjouterHeureArriv(id:number,date:Date):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/ajouterHeureArriv/"+id,date);
  }
  AjouterHeureDep(id:number,date:Date):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/ajouterHeureDep/"+id,date);
  }
  AjouterHeureSup(id:number,heur:number):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/modifierHeureSupp/"+id,heur);
  }
  AjouterHeureCong(id:number,heur:number):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/modifierHeureConge/"+id,heur);
  }
  createObjectifPerformance(idCalendrierEmp: number, objectif: number): Observable<any> {
    const url = `${URL}/objectifPerformance/${idCalendrierEmp}`;
    return this.http.post(url, { objectif });
  }
  getCalendrierEmpById(id: number): Observable<CalendrierEmp> {
    return this.http.get<CalendrierEmp>(`${URL}/${id}`);
  }
  


}
