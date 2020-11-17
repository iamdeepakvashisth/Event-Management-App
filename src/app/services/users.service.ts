import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<Users> {
    return this.http.post<Users>(this.api, data)
  }

  getUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.api)
  }
}




