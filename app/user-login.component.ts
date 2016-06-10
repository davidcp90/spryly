import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'my-user-login',
    templateUrl: 'app/user-login.component.html',
    providers: [AuthenticationService]
})
export class UserLoginComponent implements OnInit {
    token: string = ''
    user: User = {
        username: '',
        password: ''
    }

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {}

    login() {
        this.authenticationService.login(this.user).then(token => this.token = token);
    }
}
