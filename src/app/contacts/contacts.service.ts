import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import sprGlobals = require('../globals');
import 'rxjs/add/operator/toPromise';
import { Contact } from './contact';
import { CONTACTS } from './contacts.mock';
@Injectable()
export class ContactsService {
    private endpoint = sprGlobals.endpoint;

    //constructor(private http: Http) { }
    getContacts() {
        return Promise.resolve(CONTACTS);
    }
    /*
    post(contact: Contact): Promise<string> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.endpoint ,JSON.stringify(contact), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }*/

}