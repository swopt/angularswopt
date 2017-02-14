import { Component } from '@angular/core';
import { PersComponent} from './hr/pers.component';

@Component({
  selector: 'fis',
  template: `
    <h1>{{name}}</h1>
    <personnel></personnel>
    `,
})

export class FisComponent  {
  name = 'FIS';
}

export class Fis {
  id : number;
  name: string;
}
