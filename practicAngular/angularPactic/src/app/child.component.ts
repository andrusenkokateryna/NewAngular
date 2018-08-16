import { Component, EventEmitter, Input, Output} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    templateUrl:'./child.component.html' ,
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 
   /*@Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);*/
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
}
}