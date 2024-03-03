import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/loginUser/';

  constructor(private http: HttpClient) { }

  login(credenciales: Login): Observable<any> {
    // Utilizar la URL completa
    const loginUrl = `${this.apiUrl}`;

    // Realizar la solicitud POST al backend para la autenticación
    return this.http.post<any>(loginUrl, credenciales);
  }
}

