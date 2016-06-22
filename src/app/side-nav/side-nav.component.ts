import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
	selector: 'spr-side-nav',
	template: require ('./side-nav.component.html'),
	directives: [ROUTER_DIRECTIVES]
})
export class SideNavComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}
	