import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { Recommendation } from './recommendation';
import { Network } from './network';
import { Message } from './message';

@Injectable()
export class RecommendationService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'X-Auth-Token': localStorage.getItem('token')
  });
  private recommendationsUrl = sprGlobals.endpoint + '/typenetworks/';

  constructor(private http: Http) { }

  getRecommendations(): Promise<Recommendation[]> {

    let url = sprGlobals.endpoint + '/typenetworks/' + localStorage.getItem('id');

    return this.http
      .get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        let recommendations: Recommendation[];
        let data = response.json();

        for (let row of data) {
          let r: Recommendation = {
            id: row.id,
            contact: row.number,
            requester: row.number,
            status: row.number,
            type: row.number,
            relation_type: row.number,
            organization: row.number,
            confirmed: row.number,
            position: row.number,
            contact_position: row.number
          };

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

  sendMessage(message: Message): Promise<JSON> {
    let sendMessageUrl = sprGlobals.endpoint + '/typenetworks/' + message.typeNetworkId + '/notify';

    return this.http
    .get(sendMessageUrl, { headers: this.headers })
    // .post(sendMessageUrl, JSON.stringify(message), { headers: this.headers })
    .toPromise()
    .then()
    .catch(this.handleError);
  }

  getRecommendationById(id: String): Promise<Network> {
    let url = sprGlobals.endpoint + '/typenetworks/all/' + id;
    return this.http
      .get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        let r = response.json();
        let n: Network = {
          source: r.number,
          sourceRole: r.number,
          sourceOrganization: r.number,
          targetEmail: r.number,
          targetName: r.number,
          targetRole: r.number,
          targetOrganization: r.number,
          startMonth: r.number,
          startYear: r.number,
          endMonth: r.number,
          endYear: r.number,
          comments: r.number
        };

        return n || { };
    })
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
