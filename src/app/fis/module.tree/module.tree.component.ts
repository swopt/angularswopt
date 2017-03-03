import {Component,OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';
import {ModuleTreeService} from './module.tree.service';

@Component({
    selector: 'module-tree',
    templateUrl: 'module.tree.html',
    styleUrls: ['module.tree.css'],
    moduleId: module.id.replace('/dist/','src'),
    providers: [ModuleTreeService]
})

export class ModuleTreeComponent implements OnInit{
    constructor(private modTreeServ:ModuleTreeService){}
    modTreeItems: ModuleTreeItem[];
    ngOnInit(): void {this.getModuleTreeItems()} 
    getModuleTreeItems(): void {
        this.modTreeServ.getModuleTree().then(modTreeItems=>  this.modTreeItems=modTreeItems)
    }
    module: Array<ModuleTreeItem> = [
        {prgName:'Account Payable',subs: [
            {prgName:'Enquiry',subs: [
                {prgName:'Account Ledger Enquiry',subs:undefined},
                {prgName:'Payment Voucher Enquiry',subs:undefined}
            ]},
            {prgName:'Maintenance',subs: [
                {prgName:'Account Category Maintenance',subs:undefined},
                {prgName:'AP Distribution Setting...',subs:undefined},
                {prgName:'Batch Posting Utility',subs:undefined},
                {prgName:'Creditor (Company)',subs:undefined},
                {prgName:'Creditor (Individual)',subs:undefined}
            ]}
        ]},
        {prgName:'Account Receivable',subs: [
            {prgName:'Enquiry',subs: [
                {prgName:'Account Ledger Enquiry',subs:undefined},
                {prgName:'Payment Voucher Enquiry',subs:undefined}
            ]},
            {prgName:'Maintenance',subs: [
                {prgName:'Account Category Maintenance',subs:undefined},
                {prgName:'AP Distribution Setting...',subs:undefined},
                {prgName:'Batch Posting Utility',subs:undefined},
                {prgName:'Creditor (Company)',subs:undefined},
                {prgName:'Creditor (Individual)',subs:undefined}
            ]}
        ]},
        {prgName:'Cash Management',subs: [
            {prgName:'Enquiry',subs: [
                {prgName:'Account Ledger Enquiry',subs:undefined},
                {prgName:'Payment Voucher Enquiry',subs:undefined}
            ]},
            {prgName:'Maintenance',subs: [
                {prgName:'Account Category Maintenance',subs:undefined},
                {prgName:'AP Distribution Setting...',subs:undefined},
                {prgName:'Batch Posting Utility',subs:undefined},
                {prgName:'Creditor (Company)',subs:undefined},
                {prgName:'Creditor (Individual)',subs:undefined}
            ]}
        ]}
    ];
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

