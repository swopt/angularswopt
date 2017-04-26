import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {ApModule} from './fis/ap/ap.module';
import { AppComponent }  from './app.component';
import { FisComponent } from './fis/fis.component';
import { PersComponent } from './fis/pers/pers.component';
import {UserComponent} from './fis/user/user.component';
import { ModuleTreeComponent} from './fis/module.tree/module.tree.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'pers', component: PersComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),
    HttpModule,JsonpModule,MaterialModule,
    ApModule,
    ],
  declarations: [
    AppComponent,
    FisComponent, PersComponent, UserComponent,ModuleTreeComponent,LoginComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

