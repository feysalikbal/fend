import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginFlag: boolean = true;
  signupFlag: boolean = false;

  signinForm: NgForm;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  setLoginFlag(){
    this.signupFlag = false;
    this.loginFlag = true;
  }

  setSignupFlag(){
    this.loginFlag = false;
    this.signupFlag = true;
  }


  googleLogin() {
    this.authService.loginWithGoogle();
    this.router.navigate(['/profile']);    //navigate to the user dashboard
  }

  emailLogin(){
    //Display email and password field
  }

  signup(){
    //new user form
  }

}
