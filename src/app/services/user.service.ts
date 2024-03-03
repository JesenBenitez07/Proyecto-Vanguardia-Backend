import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) { }

  getregisterUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  getregisterUser(userId: string): Observable<any> {
    return this.http.get(this.url + userId);
  }

  saveUser(user:User): Observable<any> {
    return this.http.post(this.url, user);
  }
}

