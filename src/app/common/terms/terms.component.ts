import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'spr-terms',
    template: require('./terms.component.html'),
    templateUrl: 'terms.component.html'
})
export class TermsComponent implements OnInit {
    project: string;
    company: string;
    contactEmail: string;
    lastUpdate: string;
    termsURL: string;
    designate: string;

    constructor() { }

    ngOnInit() {
        this.project = 'Spryly';
        this.company = 'Spryly Technologies Co.';
        this.contactEmail = 'human@spryly.co';
        this.lastUpdate = 'July 21, 2016';
        this.termsURL = 'https://spryly.co/terms';
        this.designate = 'David Camargo';
     }
}
