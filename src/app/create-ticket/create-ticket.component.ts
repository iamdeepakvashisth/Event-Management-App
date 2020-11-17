import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  addTicketForm: FormGroup
  tickets: Ticket[] = []
  data: any

  constructor(private builder: FormBuilder, private eService: TicketService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.buildForm()

  }
  buildForm() {
    this.addTicketForm = this.builder.group({
      eventName: ['', Validators.required],
      price: ['', Validators.required]

    })
  }
  handleSubmit() {
    console.log(this.addTicketForm.value);

    this.data = this.addTicketForm.value
    this.eService.addTicket(this.data)
      .subscribe((event) => {
      })
    this.router.navigate(['/displayTickets']);
  }
}