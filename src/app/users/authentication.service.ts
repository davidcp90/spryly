import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { Login } from './login';
import { User } from './user';

@Injectable()
export class AuthenticationService {
  private signInUrl = sprGlobals.endpoint + '/users/signIn';
  private signUpUrl = sprGlobals.endpoint + '/users/signUp';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  signIn(login: Login): Promise<JSON> {
    return this.http
      .post(this.signInUrl, JSON.stringify(login), { headers: this.headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  signUp(user: User): Promise<JSON> {
    return this.http
      .post(this.signUpUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  // upload(file: File): Promise<JSON> {
  //   headers = new Headers({ 'Content-Type': 'multipart/form-data' });
  //
  //   return this.http
  //     .post(this.signUpUrl, JSON.stringify(user), { headers: this.headers })
  //     .toPromise()
  //     .then(response => response.json().token)
  //     .catch(this.handleError);
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
