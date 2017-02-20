import { Component } from '@angular/core';

const persArr: Pers[] = [
    {id: 1,name: 'Chin Koon Yung',position:'General Manager'},
    {id: 2,name: 'Chang Poh Yu',position:'Senior Programmer'},
    {id: 3,name: 'Lo Chew Phing',position:'Analyst Programmer'},
    {id: 4,name: 'Vivien Lim',position:'Analyst Programmer'},
    {id: 5,name: 'Wong Pi Li',position:'Admin Officer'},
    {id: 6,name: 'Eric Wong',position:'Applications Developer'},
    {id: 7,name: 'Samuel Wong',position:'Programmer'}
]

@Component({
    selector: 'fis-pers',
    templateUrl: 'pers.html',
    moduleId: module.id.replace("/dist/","src"),
})

export class PersComponent {
    pers = persArr;
}

export class Pers {
    id: number;
    name: string;
    position: string;
}