import { Component } from '@angular/core';

const persArr: Pers[] = [
    {id: 1,name: 'Chin Koon Yung',position:'General Manager'},
    {id: 2,name: 'Chang Poh Yu',position:'Senior Programmer'},
    {id: 3,name: 'Lo Chew Phing',position:'Analyst Programmer'},
    {id: 4,name: 'Vivien Lim',position:'Analyst Programmer'},
    {id: 5,name: 'Wong Pi Li',position:'Admin Officer'},
    {id: 6,name: 'Eric Wong',position:'Applications Developer'},
    {id: 7,name: 'Fam Boon Long',position:'Analyst Programmer'},
    {id: 8,name: 'Samuel Wong',position:'Programmer'},
    {id: 9,name: 'Lai Soh Pei',position:'Programmer'},
    {id: 10,name: 'Ling Pik Hung',position:'Programmer'},
    {id: 11,name: 'Gilbert Ngu',position:'Programmer'},
    {id: 12,name: 'Elizabeth Soon',position:'Implementor'},
    {id: 13,name: 'Voon Ching Han',position:'Programmer'}
]

@Component({
    moduleId: module.id,
    selector: 'fis-pers',
    templateUrl: 'pers.html',
    styleUrls: ['pers.css'] ,
})

export class PersComponent {
    pers = persArr;
}

export class Pers {
    id: number;
    name: string;
    position: string;
}