import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FisComponent } from './fis/fis.component';
import { PersComponent } from './fis/pers/pers.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    FisComponent, PersComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
