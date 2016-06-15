import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../authentication/user';

@Injectable()
export class AuthenticationService {
    private authenticationUrl = 'http://localhost:9000/apps';

    constructor(private http: Http) { }

    login(user: User): Promise<string>  {
        return this.post(user);
    }

    private post(user: User): Promise<string> {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(this.authenticationUrl, JSON.stringify(user), {headers: headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    }
}
