import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';
import { Recommendation } from './recommendation';

@Injectable()
export class RecommendationService {
    private endpoint = sprGlobals.endpoint;

    constructor(private http: Http) { }

    post(rec: Recommendation): Promise<string> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.endpoint , JSON.stringify(rec), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
