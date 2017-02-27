import {Component} from '@angular/core';

@Component({
  selector: 'fisc',
  template: `<h2>{{fis.prgTitle}}</h2><fis-pers></fis-pers>`,
})

export class FisComponent {
  fis: Fis = {prgTitle: 'Personnel Information'};
}

export class Fis {
  prgTitle: string;
}