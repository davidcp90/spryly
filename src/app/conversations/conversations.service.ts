import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';
import { Conversation } from './conversation';


@Injectable()
export class ConversationsService {
    private endpoint = sprGlobals.endpoint;

    constructor(private http: Http) { }

    post(conv: Conversation): Promise<string> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.endpoint , JSON.stringify(conv), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
