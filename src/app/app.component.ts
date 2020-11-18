import { Component } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event-Management';
  isAdmin : boolean 
  constructor(private global: Global) { this.isAdmin = this.global.isAdmin}


}

