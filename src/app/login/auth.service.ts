import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
    isLoggedin: boolean;
    
    constructor(private _http:Http) {
        
    }
    
    loginfn(usercreds: UserCredentials) {
        this.isLoggedin = false;
        var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
        this._http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                window.localStorage.setItem('auth_key', data.json().token);
                this.isLoggedin = true;}
            resolve(this.isLoggedin)
        })
        
        })
    }

    register(usercreds: UserCredentials) {
        return new Promise (resolve => {
            var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
            var headers = new Headers();
            headers.append('Content-Type', 'application/X-www-form-urlencoded');
            this._http.post('http://localhost:3333/adduser',creds, {headers: headers}).subscribe((data) => {
                if(data.json().success) resolve(true);
                else resolve(false);
            });
        });
    }

    logout() {
        this.isLoggedin = false;
        window.localStorage.clear();
    }
}

export class UserCredentials {
    username: string;
    password: string;
}