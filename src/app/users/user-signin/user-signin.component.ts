import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Login } from '../login';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'spr-signin',
  template: require('./user-signin.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [AuthenticationService]
})
export class UserSignInComponent implements OnInit {
  error: string;
  token: string = '';
  login: Login = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(private authenticationService: AuthenticationService) { };

  ngOnInit() {}

  signIn() {
    this.authenticationService.signIn(this.login)
      .then(token => this.storeToken(token))
      .catch(error => this.error = error);
    }

    private storeToken(token) {
      this.token = token;
      localStorage.setItem('token', token);
    }
}
