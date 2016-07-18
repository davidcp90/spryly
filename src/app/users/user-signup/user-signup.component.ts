import { Component, OnInit, Input } from '@angular/core';
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
  @Input() landing: boolean;
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

  ngOnInit() { }

  signUp() {
    this.authenticationService.signUp(this.user)
      .then(auth => this.storeInfo(auth))
      .catch(error => this.error = error);
  }

  private storeInfo(auth) {
    this.token = auth.token;
    localStorage.setItem('token', auth.token);
    localStorage.setItem('id', auth.id);
    // this.authenticationService.upload();
  }
}
