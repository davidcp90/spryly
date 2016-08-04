import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PROFILE } from './mock-profile';
import { VERIFICATIONS } from './mock-verifications';
import sprGlobals = require('../globals');
@Injectable()
export class ProfileService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'X-Auth-Token': localStorage.getItem('token')
  });
  constructor(private http: Http) { }
  getProfileMock() {
    return Promise.resolve(PROFILE);
  }
  getProfile(): Promise<JSON> {
    let url = sprGlobals.endpoint + '/users/user';
    return this.http
      .get(url, { headers: this.headers })
      .toPromise()
      .then(response => this.handleSuccess(response))
      .catch(this.handleError);
  }
  getVerificationsMock() {
    return Promise.resolve(VERIFICATIONS);
  }
   private handleSuccess(response) {
    return response.json();
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
