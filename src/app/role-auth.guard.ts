import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';


@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {
  constructor(
    private userService: UsersService,
    private router: Router
  ) {
  }
  user
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    console.log(route, state)
    this.user = this.userService.loggedUserVal
    if (this.user) {
      
      if (state.url == "/addEvent" || state.url == "/displayEvent" || state.url == "/addTicket" || state.url == "/ticketSale"  )
      //console.log("Inside Admin Component")
        if (this.user.isAdmin) {
          return true
        } else {
          console.log('Not authorised')
          alert("This is for Admin, You are not authorised here!")
          return false
        }
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
    // return true;
  }

}

