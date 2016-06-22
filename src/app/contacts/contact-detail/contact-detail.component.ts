import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'spr-contact-detail',
  template: require('./contact-detail.component.html')
})

export class ContactDetailComponent implements OnInit {
	@Input() contact: Contact;
	constructor() { }

	ngOnInit() { }

}