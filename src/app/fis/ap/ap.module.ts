import {NgModule} from '@angular/core';
import {ApAccLedgerEnqComponent} from './ap.enquiry.account.ledger.enquiry/component';
import {ApRoutingModule} from './ap.routing';

@NgModule({
    imports: [
       ApRoutingModule
    ],
    declarations: [
        ApAccLedgerEnqComponent,
    ],
    exports: [ApAccLedgerEnqComponent]
})

export class ApModule{}