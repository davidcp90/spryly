import { Component} from '@angular/core';
import { Invite } from './invite';
import { NgForm }    from '@angular/common';
@Component({
  selector: 'spr-contact-add',
  template: require('./contact-add.component.html')
})
export class ContactAddComponent {
  invite: Invite;
  submitted = false;
  onSubmit() { this.submitted = true; }

}
