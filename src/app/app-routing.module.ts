import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleAuthGuard } from './role-auth.guard';
import { TicketSaleComponent } from './ticket-sale/ticket-sale.component';

const routes:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'addEvent', component: CreateEventComponent, canActivate:[RoleAuthGuard] },
  { path: 'displayEvent', component: DisplayEventsComponent, canActivate:[RoleAuthGuard] },
  { path: 'buyTickets', component: BuyTicketsComponent, canActivate:[AuthGuard] },
  { path: 'addTicket', component: CreateTicketComponent, canActivate:[RoleAuthGuard] },
  { path: 'ticketSale', component: TicketSaleComponent, canActivate:[RoleAuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
