import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Users } from '../models/users';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users: Users[] = [];
  data: any;
 isAdmin:"false"; 

  constructor(private builder: FormBuilder, private uService: UsersService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.buildForm();

  }
  buildForm() {
    this.registerForm = this.builder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isAdmin:[]
    });
  }
  handleSubmit(){
    console.log(this.registerForm.value);

    this.data = this.registerForm.value, this.isAdmin ;
    this.uService.registerUser(this.data)
      .subscribe((user) => {
      })
      this.router.navigate(['/login'] );


  }
}