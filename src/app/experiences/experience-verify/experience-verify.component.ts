import { Component, OnInit } from '@angular/core'; // , Input
import { CORE_DIRECTIVES } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';
// import { TYPEAHEAD_DIRECTIVES } from 'node_modules/';

@Component({
  selector: 'spr-experience-verify',
  template: require('./experience-verify.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [ExperienceService]
})

export class ExperienceVerifyComponent implements OnInit {
  error: string;
  token: string = '';
  key: string = '';
  months: string[];
  years: number[];
  experience: Experience;

  constructor(private experienceService: ExperienceService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      let key = params['key'];

      this.experienceService.findByKey(key).subscribe(
        experience => {
          this.experience = experience;
          console.log(experience);
        },
        error =>  this.error = <any>error);
    });
  }

  submit() {
     let key = '';
     this.experienceService.verify(key, this.experience)
      .subscribe(
        experience => this.experience = experience,
        error =>  this.error = <any>error
      );
  }
}
