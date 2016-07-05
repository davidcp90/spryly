import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { Recommendation } from './recommendation';
import { Network } from './network';

@Injectable()
export class RecommendationService {
    private headers = new Headers(
        {
	        'Content-Type': 'application/json',
	        'X-Auth-Token': localStorage.getItem('token')
        }
    );
    private recommendationsUrl = sprGlobals.endpoint + '/typenetworks/';

    constructor(private http: Http) { }

    getRecommendations(): Promise<Recommendation[]> {
        let url = sprGlobals.endpoint + '/typenetworks/' + localStorage.getItem('id');
        

        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(response => {
                let recommendations: Recommendation[] = [];
	            var data = response.json();

                for(var row of data){
                    let r = new Recommendation();
                    
                    recommendations.push(r);
                }
                return recommendations;
            })
            .catch(this.handleError);
    }

    request(network: Network): Promise<JSON> {
        return this.http
            .post(this.recommendationsUrl, JSON.stringify(network), { headers: this.headers })
            .toPromise()
        .then(response => this.handleSuccess(response))
        .catch(this.handleError);
    }

    private handleSuccess(response) {
        return response.json();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
