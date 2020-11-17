import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { DisplayTicketsComponent } from './display-tickets/display-tickets.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'addEvent', component: CreateEventComponent },
  { path: 'displayEvent', component: DisplayEventsComponent },
  { path: 'buyTickets', component: BuyTicketsComponent },
  { path: 'addTicket', component: CreateTicketComponent },
  { path: 'displayTickets', component: DisplayTicketsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
