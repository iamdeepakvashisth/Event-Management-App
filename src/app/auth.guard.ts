// import { Router } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
      // con
      if (state.url == "/home"|| state.url == "/buyTickets")
      console.log("Inside Home Component")
        if (this.user.isAdmin) {
          console.log(' Not authorised')
          alert("This is for Users! You are not authorised here!")
          return false
        } else {
          return true
        }
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
    // return true;
  }

}
