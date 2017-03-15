import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ModuleTreeService {
    constructor (private http: Http){}
    getModuleTree(): Observable<ModuleTreeItem[]> {
        return this.http.get("./module.tree.json")
                        .map((res:Response)=>res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    getModTreeItemsSlowly(): Promise<ModuleTreeItem[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getModuleTree()), 2000);
        });
    }
}