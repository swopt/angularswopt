import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  moduleId: module.id.replace("/dist/","src"),
})

export class AppComponent  { 
  title = 'FIS'; 
  fullTitle = 'Financial Information System';
}
