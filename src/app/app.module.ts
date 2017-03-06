import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { FisComponent } from './fis/fis.component';
import { PersComponent } from './fis/pers/pers.component';
import { ModuleTreeComponent} from './fis/module.tree/module.tree.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,JsonpModule,MaterialModule ],
  declarations: [
    AppComponent,
    FisComponent, PersComponent, ModuleTreeComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
