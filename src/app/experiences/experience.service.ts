import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

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
import { Experience } from './experience';

@Injectable()
export class ExperienceService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  /*private experiencesURL = sprGlobals.endpoint + "/interactions/";*/
  constructor(private http: Http) { }

  findByKey(key: string): Observable<Experience> {
    // let url = this.experiencesURL + '/networks/' + key;
    let url = '/data/experience.json';

    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        let data = response.json();
        return this.prepareExperience(data);
      })
      .catch(this.handleError);
  }

  verify(key: string, experience: Experience): Observable<Experience> {
    let url = sprGlobals.endpoint + '/networks/' + key;

    return this.http
      .post(url, JSON.stringify(experience), { headers: this.headers })
      .map(response => {
        let data = response.json();
        return this.prepareExperience(data);
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error'));

    return Observable.throw(errMsg);
  }

  private prepareExperience(json: JSON): Experience {
    let experience: Experience = {
      source: json['interaction'].connection.source.id,
      sourceName: json['interaction'].connection.source.name,
      sourcePicture: json['interaction'].connection.source.picture,
      sourceRole: json['sourceRole'],
      sourceOrganization: json['sourceOrganization'],
      targetEmail: json['interaction'].connection.target.email,
      targetName: json['interaction'].connection.target.name,
      targetPicture: json['interaction'].connection.target.picture,
      targetRole: json['targetRole'],
      targetOrganization: json['targeOrganization'],
      startMonth: json['start'].substring(5, 7),
      startYear: json['start'].substring(0, 4),
      endMonth: json['end'] ? json['end'].substring(5, 7) : '',
      endYear: json['end'] ? json['end'].substring(0, 4) : '',
      comments: json['comments']
    };
    return experience;
  }
}
