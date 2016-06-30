import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { User } from '../authentication/user';

@Injectable()
export class AuthenticationService {
    private authenticationUrl = sprGlobals.endpoint + '/users/signIn';

    constructor(private http: Http) { }

    login(user: User): Promise<JSON> {
        return this.post(user);
    }

    private post(user: User): Promise<JSON> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http
            .post(this.authenticationUrl, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(response => response.json().token)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    }
}
