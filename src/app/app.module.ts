import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FisComponent } from './fis/fis.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    FisComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
