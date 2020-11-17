import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  apiUrl: string = 'http://localhost:3000/events'
  constructor(private http: HttpClient) { }

  getEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl)
  }
  addEvent(data): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, data)
  }
}