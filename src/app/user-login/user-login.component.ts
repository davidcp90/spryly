import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import { User } from '../authentication/user';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'spr-login',
    template: require('./user-login.component.html'),
    directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
    viewProviders: [BS_VIEW_PROVIDERS],
    providers: [AuthenticationService]
})
export class UserLoginComponent implements OnInit {
    error: string;
    token: string = '';
    user: User = {
        email: '',
        password: '',
        rememberMe: false
    };

    constructor(private authenticationService: AuthenticationService) { };

    ngOnInit() {}

    login() {
        this.authenticationService.login(this.user)
            .then(token =>
                this.storeToken(token)
            )
            .catch(error => this.error = error);
    }

    private storeToken(token) {
        this.token = token;
        localStorage.setItem("token", token);
    }
}
