import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { SHARES } from './experience-share/mock-shareInfo';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import sprGlobals = require('../globals');
import { Experience, PersonExperience } from './experience';

@Injectable()
export class ExperienceService {
  private headers = new Headers({
   'Content-Type': 'application/json',
   'X-Auth-Token': localStorage.getItem('token')
 });
  private experiencesURL = sprGlobals.endpoint + '/typenetworks/';
  constructor(private http: Http) { }

  getAllExperiences(): Observable<Experience> {
    let url = this.experiencesURL + localStorage.getItem('id');
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        let data = response.json();
        return this.prepareExperience(data);
      })
      .catch(this.handleError);
  }
  findByKey(key: string): Observable<Experience> {
    // let url = this.experiencesURL + '/networks/' + key;
    let url = '/data/experience.json';

    return this.http
      .get(url, { headers: this.headers })
      .map(this.prepareExperience)
      .catch(this.handleError);
  }

  verify(key: string, experience: Experience): Observable<Experience> {
    let url = sprGlobals.endpoint + '/networks/' + key;

    return this.http
      .post(url, JSON.stringify(experience), { headers: this.headers })
      .map(this.prepareExperience)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error'));

    return Observable.throw(errMsg);
  }

  private prepareExperience(res: Response): Experience {
    let json = res.json();

    let source: PersonExperience = {
        id: json['source'].id,
        name: json['source'].name,
        picture: json['source'].picture,
        email: json['source'].email,
        role: json['source'].role,
        organization: json['source'].organization,
        relationship: '',
    };

    let target: PersonExperience = {
       id: json['target'].id,
        name: json['target'].name,
        picture: json['target'].picture,
        email: json['target'].email,
        role: json['target'].role,
        organization: json['target'].organization,
        relationship: '',
    };

    let experience: Experience = {
      id: 'id' in json ? json['id'] : '',
      source: source,
      target: target,
      startMonth: json['startMonth'],
      startYear:  json['startYear'],
      endMonth: json['endMonth'] ? json['endMonth'] : '',
      endYear: json['endYear'] ? json['endYear'] : ''
    };

    return experience;
  }

  getShares() {
    return Promise.resolve(SHARES);
  }

}
