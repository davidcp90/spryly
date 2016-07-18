import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';
// import { CONTACTS } from './contacts.mock';

// import { User } from '../users/user';

@Injectable()
export class ContactsService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('token')
    }
  );

  constructor(private http: Http) { }

  getContacts(): Promise<Contact[]> {
    let url = sprGlobals.endpoint + '/connections/' + localStorage.getItem('id');
    let contacts: Contact[];

    return this.http
      .get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        let data = response.json();

        for (let row of data) {
          contacts.push(new Contact(
            row.target.id, row.target.email, row.target.name, row.target.picture
          ));
        }

        return contacts;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
