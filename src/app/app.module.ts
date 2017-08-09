import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { FisComponent } from './fis/fis.component';
import { PersComponent } from './fis/pers/pers.component';
import {UserComponent} from './fis/user/user.component';
import { ModuleTreeComponent} from './fis/module.tree/module.tree.component';
import {LoginComponent} from './login/login.component';
import {FisTemplateComponent} from './fis/template/fis.template.component';
import {EnquiryComponent} from './fis/enquiry/component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'template'},
    {path: 'pers', component: PersComponent},
    {path: 'login', component: LoginComponent},
    {path: 'template', component: FisTemplateComponent},
    {path: 'enquiry', component: EnquiryComponent},
]

@NgModule({
  imports:      [ 
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),
    HttpModule,JsonpModule,MaterialModule
    ],
  declarations: [
    AppComponent,
    FisComponent, PersComponent, UserComponent,ModuleTreeComponent,LoginComponent,
    FisTemplateComponent,EnquiryComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

