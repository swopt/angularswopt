import {Injectable} from '@angular/core';
import {ModuleTreeItem} from './module.tree';

@Injectable()
export class ModuleTreeService {
    getModuleTree(): Promise<ModuleTreeItem[]> {
        return Promise.resolve ([
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
        ]);
    }
    getModTreeItemsSlowly(): Promise<ModuleTreeItem[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getModuleTree()), 2000);
        });
    }
}