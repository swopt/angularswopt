import { Component } from '@angular/core';
import {PerService} from './pers.service';

@Component({
    moduleId: module.id,
    selector: 'fis-pers',
    templateUrl: 'pers.html',
    styleUrls: ['pers.css'] ,
    providers: [PerService],
})

export class PersComponent {
    pers: Pers[];
    constructor(private perService: PerService) {
        
    }
    ngOnInit(): void {
        this.getPers();
    }

    private getPers(){
        this.perService.getPers().then(response =>this.pers = response);
    }
}

export class Pers {
    id: number;
    name: string;
    position: string;
}