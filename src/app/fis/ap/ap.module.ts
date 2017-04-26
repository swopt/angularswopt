import {NgModule} from '@angular/core';
import {AccountLedgerEnquiryComponent} from './enquiry/account.ledger.enquiry/component';
import {ApRoutingModule} from './ap.routing';

@NgModule({
    imports: [
       ApRoutingModule
    ],
    declarations: [
        AccountLedgerEnquiryComponent,
    ],
    exports: [AccountLedgerEnquiryComponent]
})

export class ApModule{}