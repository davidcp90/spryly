import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';
import { CONTACTS } from './contacts.mock';

import { User } from '../users/user';

@Injectable()
export class ContactsService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

	private contactsURL = sprGlobals.endpoint + '/connections/';

    constructor(private http: Http) { }
    
    getContacts(): Promise<JSON> { //user: User
        let url = this.contactsURL; // + user.id
        
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
