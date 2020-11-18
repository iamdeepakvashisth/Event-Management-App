import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event = [];
  eventName: string
  description: string
  location: string
  startdate: any
  enddate:any
  constructor(private eService: EventsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.eService.getEvent()
      .subscribe(response => this.event = response);
  }

}
