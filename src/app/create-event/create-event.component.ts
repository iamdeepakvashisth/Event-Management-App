import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  addEventForm: FormGroup
  events: Event[] = []
  data: any

  constructor(private builder: FormBuilder, private eService: EventsService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.buildForm()

  }
  buildForm() {
    this.addEventForm = this.builder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     
    })
  }
  handleSubmit(){
    console.log(this.addEventForm.value);

    this.data = this.addEventForm.value
    this.eService.addEvent(this.data)
      .subscribe((event) => {
      })
      this.router.navigate(['/home'] );
  }
}