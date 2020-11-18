import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = "http://localhost:3000/users"
  loggedUser=new Subject()
  loggedUserVal

  loginUser(user){
    console.log(user)
    this.loggedUserVal=user
    this.loggedUser.next(user)
  }

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<Users> {
    return this.http.post<Users>(this.api, data)
  }

  getUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.api)
  }
}




