import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ContactDetailComponent } from '../contact-detail';
import { Contact } from '../contact';
@Component({
  selector: 'spr-contact-list',
  template: require('./contact-list.component.html'),
  directives: [ContactDetailComponent]
})

export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private _contactsService: ContactsService) { }
  getContacts() {
	  this._contactsService.getContacts().then(contacts => this.contacts = contacts);
  }
  ngOnInit() { 
	  this.getContacts();
  }

}