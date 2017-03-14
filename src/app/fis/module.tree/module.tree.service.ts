import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';
import {Http} from '@angular/http';

@Injectable()
export class ModuleTreeService {
    constructor(private http: Http){
        let obj;
    }
    getModuleTree(): Promise<ModuleTreeItem[]> {
        return Promise.resolve ([]);
    }
    getModTreeItemsSlowly(): Promise<ModuleTreeItem[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getModuleTree()), 2000);
        });
    }
}