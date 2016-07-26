import { Component, Input } from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import { Verification } from '../../profile/verification';
@Component({
  selector: 'spr-experience-detail',
  directives: [TOOLTIP_DIRECTIVES],
  template: require('./experience-detail.component.html')
})
export class ExperienceDetailComponent {
  @Input() verification: Verification;
  @Input() idExp: string;
}
