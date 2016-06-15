import { Component, OnInit } from '@angular/core';

import { User } from '../authentication/user';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'my-user-login',
    templateUrl: 'user-login.component.html',
    providers: [AuthenticationService]
})
export class UserLoginComponent implements OnInit {
    error: string;
    token: string = ''
    user: User = {
        username: '',
        password: ''
    }

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {}

    login() {
        this.authenticationService.login(this.user)
            .then(token => this.token = token)
            .catch(error => this.error = error);
    }
}
