import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';

@Injectable()
export class AuthenticationService {
    private authenticationUrl = 'apps';

    constructor(private http: Http) { }

    login(user: User): Promise<string>  {
        return this.post(user);
    }

    private post(user: User): Promise<string> {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(this.authenticationUrl, JSON.stringify(user), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    }
}
