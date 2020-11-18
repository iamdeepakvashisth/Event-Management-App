import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketSale } from '../models/ticket-sale';

@Injectable({
  providedIn: 'root'
})
export class TicketSaleService {
  apiUrl: string = 'http://localhost:3000/ticketSale'

  currentSale: TicketSale = {
    id: null,
    eventName: '',
    customerEmail: '',
    noOfTickets: null
  }

  constructor(private http: HttpClient) { }

  getAllTicketSale(): Observable<TicketSale[]> {
    return this.http.get<TicketSale[]>(this.apiUrl)
  }
}