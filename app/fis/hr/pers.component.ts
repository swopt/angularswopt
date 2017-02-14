import {Component} from '@angular/core';

const PERSONS : Pers[] = [
  {id:1,name:'Chin Koon Yung'},
  {id:2,name:'Chang Poh Yu'}
];

@Component({
  selector: 'personnel',
  template: `
    <div>{{title}}</div>
    <div>
      <div style="float:left" *ngFor="let per of pers">
        {{per.id}} - {{per.name}}
      </div>
    </div>
    `,
})

export class PersComponent {
  title = 'Personnel';
  pers = PERSONS;
}

export class Pers {
  id: number;
  string: name;
}
