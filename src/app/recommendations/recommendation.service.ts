import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';
import { Recommendation } from './recommendation';

@Injectable()
export class RecommendationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    private recommendationsURL = sprGlobals.endpoint + '/typenetworks/';

    constructor(private http: Http) { }

    getRecommendations(): Promise<JSON> {
        let url = this.recommendationsURL
        
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
