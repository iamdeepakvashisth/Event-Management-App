import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketSaleComponent } from './ticket-sale/ticket-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    TopNavComponent,
    HomeComponent,
    CreateEventComponent,
    DisplayEventsComponent,
    BuyTicketsComponent,
    CreateTicketComponent,
    TicketSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
