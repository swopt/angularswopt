import {Component} from '@angular/core';

@Component({
  selector: 'fisc',
  template: `<h2>{{fis.prgTitle}}</h2><fis-pers></fis-pers>`,
})

export class FisComponent {
  fis: Fis = {prgTitle: 'Our Heroes',prgHtml: '<fis-pers></fis-pers>'};
}

export class Fis {
  prgTitle: string;
  prgHtml: string;
}