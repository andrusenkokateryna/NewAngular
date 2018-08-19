import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
 
@Directive({ selector: '[while]' })
export class WhileDirective {
     
    constructor(private templateRef: TemplateRef<any>, 
                private viewContainer: ViewContainerRef) 
    { }
     
    @Input() set while(condition1: boolean) {
        if (condition1) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
    }
}