/*import {  Component, 
         Input, 
         OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit, 
        ContentChild, 
        ElementRef} from '@angular/core';*/
 import { Component, ContentChild, ElementRef } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    templateUrl:'./child.component.html' ,
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 
    @ContentChild("headerContent")
    header: ElementRef;
     
    change() { 
        console.log(this.header); 
        this.header.nativeElement.textContent = "Hello to world!"; 
    }
}
