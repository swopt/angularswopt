import {Component} from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: 'user.html',
    styleUrls: ['user.css'],
    moduleId: module.id.replace('/dist/','src'),
})

export class UserComponent{
    user: User = {username:'ericwong',email:'ericwong@softwareoptima.com'};
}

export class User{
    username: string;
    email: string;
}