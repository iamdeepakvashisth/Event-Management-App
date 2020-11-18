import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent implements OnInit {
  
  ticket: Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
