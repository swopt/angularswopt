import { Component } from '@angular/core';

const persArr: Pers[] = [
    {id: 1,name: 'Chin Koon Yung',position:'Hanzo'},
    {id: 2,name: 'Chang Poh Yu',position:'McCree'},
    {id: 3,name: 'Lo Chew Phing',position:'Mei'},
    {id: 4,name: 'Vivien Lim',position:'Pharah'},
    {id: 5,name: 'Wong Pi Li',position:'Tracer'},
    {id: 6,name: 'Eric Wong',position:'Reaper'},
    {id: 7,name: 'Fam Boon Long',position:'Soldier 76'},
    {id: 8,name: 'Samuel Wong',position:'Reinhardt'},
    {id: 9,name: 'Lai Soh Pei',position:'Sombra'},
    {id: 10,name: 'Ling Pik Hung',position:'Mercy'},
    {id: 11,name: 'Gilbert Ngu',position:'Lucio'},
    {id: 12,name: 'Elizabeth Soon',position:'D.Va'},
    {id: 13,name: 'Voon Ching Han',position:'Torbjorn'}
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