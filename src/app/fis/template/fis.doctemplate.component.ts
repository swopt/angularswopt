import {Component} from '@angular/core';
import {TemplateService} from './fis.doctemplate.service';

@Component({
    moduleId: module.id,
    selector: 'fis-template',
    templateUrl: 'fis.template.html',
    providers: [TemplateService]
})

export class FisTemplateComponent {
    template: Template = new Template;
    constructor(private tplSrv: TemplateService) {
        
    }
    ngOnInit(): void {
        this.getTemplate();
    }

    private getTemplate(){
        this.tplSrv.getTemplate().then(response => this.template = response);
    }
}



export class Template {
    docHeader: DocHeader = new DocHeader;
    headFields: Field[];
    detFields: Field[];
    btnFields: Field[];
}

class DocHeader {
    docTitle:string;
}

class Field {
    fieldId: number;
    fieldName: string;
    defaultValue: string;
}