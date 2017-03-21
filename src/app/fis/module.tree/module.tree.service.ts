import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModuleTreeService {
    constructor (private http: Http){}
    getModules(): Promise<ModuleTreeItem[]> {
        return this.http.get('app/fis/module.tree/module.tree.json')
                    .toPromise()
                    .then(response => response.json().data as ModuleTreeItem[])
                    .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
        console.error('Error occurred',error);
        return Promise.reject(error.message || error);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    getModTreeItemsSlowly(): Promise<ModuleTreeItem[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getModules()), 2000);
        });
    }
}