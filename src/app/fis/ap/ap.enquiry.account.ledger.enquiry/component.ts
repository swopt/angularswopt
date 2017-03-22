import {Component} from '@angular/core';
import {FisModuleComponent} from '../../fis.module.component';

@Component({
    selector: 'ap-accledgerenq',
    templateUrl: 'page.html',
    moduleId: module.id.replace('/dist/','src'),
})

export class ApAccLedgerEnqComponent extends FisModuleComponent{
    constructor(){
        super();
    }
}