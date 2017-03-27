import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModuleTreeItem} from './module.tree';
import {ModuleTreeService} from './module.tree.service';
import 'rxjs/add/operator/startWith';

@Component({
    selector: 'module-tree',
    templateUrl: 'module.tree.html',
    styleUrls: ['module.tree.css'],
    moduleId: module.id.replace('/dist/','src'),
    providers: [ModuleTreeService],
})

export class ModuleTreeComponent{
    frmCtrl: FormControl;
    modules: ModuleTreeItem[];

    constructor(private mts: ModuleTreeService) {
        this.frmCtrl = new FormControl();
    }

    ngOnInit(): void{
        this.getModules();
    }



    getModules() {
        this.mts.getModules().then(response => this.modules = response);
    }

    clicked(event: Event, module:ModuleTreeItem) {
        event.preventDefault();
        
    }
}

