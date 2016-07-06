import { Component, OnInit, Input } from '@angular/core';
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
  @Input() landing: boolean;
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
      .then(auth => this.storeInfo(auth))
      .catch(error => this.error = error);
    }

    private storeInfo(auth) {
      this.token = auth.token;
      localStorage.setItem('token', auth.token);
      localStorage.setItem('id', auth.id);
    }
}
