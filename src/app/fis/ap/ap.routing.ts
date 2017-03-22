import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApAccLedgerEnqComponent} from './ap.enquiry.account.ledger.enquiry/component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'ap.acc.ledger.enq'},
    {path: 'ap.acc.ledger.enq', component: ApAccLedgerEnqComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ApRoutingModule {}