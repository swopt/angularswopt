import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';

@Component({
    selector: 'module-tree',
    templateUrl: 'module.tree.html',
    moduleId: module.id.replace('/dist/','src'),
})

export class ModuleTreeComponent {
    module: ModuleTreeItem = {
        prgName:'Account Payable'
    };
}

@Injectable()
export class ModuleTreeService {
    getAll() {
        //return this.parseJson();
    }

    private parseJson(object: any){
        return JSON.parse(JSON.stringify(object));
    }
}

