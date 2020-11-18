import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private userService: UsersService) { }
  users: Users;
  loggedUser;

  ngOnInit(): void {
    this.userService.loggedUser.subscribe(user => {
      console.log('top nav', user);
      this.loggedUser = user;
    })
  }
}
