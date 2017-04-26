import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountLedgerEnquiryComponent} from './enquiry/account.ledger.enquiry/component';

const routes: Routes = [
    {path: 'ap.acc.ledger.enq', component: AccountLedgerEnquiryComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ApRoutingModule {}