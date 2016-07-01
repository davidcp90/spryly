import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'spr-signup',
  template: require('./user-signup.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [AuthenticationService]
})
export class UserSignUpComponent implements OnInit {
  error: string;
  token: string = '';
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService) { };

  ngOnInit() {}

  signUp() {
    this.authenticationService.signUp(this.user)
      .then(token => this.storeToken(token))
      .catch(error => this.error = error);
    }

    private storeToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    }
}
