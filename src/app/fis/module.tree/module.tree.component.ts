import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';

@Component({
    selector: 'module-tree',
    templateUrl: 'module.tree.html',
    styleUrls: ['module.tree.css'],
    moduleId: module.id.replace('/dist/','src'),
})

export class ModuleTreeComponent {
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

