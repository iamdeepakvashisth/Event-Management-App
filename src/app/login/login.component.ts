import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Users } from '../models/users';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  checkemail: string
  checkpass: string
  users:Users[] = []
  errorMsg: boolean = true
  id: string
  constructor(private builder: FormBuilder,private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm()

  }

  buildForm(){
    this.loginForm = this.builder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
    
    })
  }

  validUser(){
    this.checkemail =(this.loginForm.value.email);
    this.checkpass =(this.loginForm.value.password);


    this.userService.getUser().subscribe((data) => {
      this.users = data
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].email == this.checkemail && this.users[i].password == this.checkpass ){
            console.log("user valid")   
                   
            this.errorMsg = true            

            this.router.navigate(['/home'] );
            
        }
        else {
          this.errorMsg = false
        }
        
      }
    })  
  }
}
