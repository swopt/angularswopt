import {Component} from '@angular/core';

@Component({
  selector: 'fis',
  template: `<h2>{{fis.title}}</h2>`,
})

export class FisComponent {
  title = 'Financial Information System';
}
