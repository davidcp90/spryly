import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'spr-experience-add',
  template: require('./experience-add.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [ExperienceService]
})

export class ExperienceAddComponent implements OnInit {
  @Input() landing: boolean;
  error: string;
  token: string = '';
  experience: Experience;

  ngOnInit() { }

}
