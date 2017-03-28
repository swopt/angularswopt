import {Injectable} from '@angular/core';
import {Pers} from './pers.component';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PerService {
    constructor (private http:Http){}
    getPers(): Promise<Pers[]> {
        return this.http.get('http://phpmysql-crazytechco.rhcloud.com/fis/get_pers.php?where=')
                    .toPromise()
                    .then(response => response.json().data as Pers[])
                    .catch(this.handleError);
    }

     private handleError (error: any): Promise<any> {
        console.error('Error occurred',error);
        return Promise.reject(error.message || error);
    }
}