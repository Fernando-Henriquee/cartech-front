import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  submitLogin(){
    debugger
    var dadosLogin = this.LoginForm.getRawValue() as LoginModel;
  }

}
