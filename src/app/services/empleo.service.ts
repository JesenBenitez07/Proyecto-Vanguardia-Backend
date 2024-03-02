import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleo } from '../model/empleo';

@Injectable({
  providedIn: 'root'
})
export class EmpleoService {
  getProduct(idempleo: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8080/api/empleos/';

  constructor(private http:HttpClient) { }

  getEmpleos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteEmpleo(idempleo:string): Observable<any> {
    return this.http.delete(this.url + idempleo);
  }

  saveEmpleo(empleo:Empleo): Observable<any> {
    return this.http.post(this.url, empleo);
  }

  getAEmpleo(idempleo:string): Observable<any> {
    return this.http.get(this.url + idempleo);
  }

  editEmpleo(idempleo:string, empleo:Empleo): Observable<any> {
    return this.http.put(this.url + idempleo, empleo);
  }
}
