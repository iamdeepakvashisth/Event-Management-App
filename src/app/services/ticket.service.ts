import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  apiUrl: string = 'http://localhost:3000/tickets'
  constructor(private http: HttpClient) { }

  getTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl)
  }
  addTicket(data): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, data)
  }
}