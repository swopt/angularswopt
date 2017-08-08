import {Injectable} from '@angular/core';
import {Template} from './fis.doctemplate.component';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TemplateService {
    constructor (private http:Http){}
    getTemplate(): Promise<Template> {
        return this.http.get('http://sopc20:3000/app/fis/template/template.json')
                    .toPromise()
                    .then(response => response.json().data as Template)
                    .catch(this.handleError);
    }

     private handleError (error: any): Promise<any> {
        console.error('Error occurred',error);
        return Promise.reject(error.message || error);
    }
}