import { Component} from '@angular/core';
import { ChildComponent} from './child.component';
import { BoldDirective} from './bold.directive';
import {WhileDirective} from './while.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {
  title = 'angularPactic';
  name:string = "Kate";
  age = 24;

  visibility: boolean = true;
    // переключаем переменную
    toggle(){
    this.visibility=!this.visibility;
}

     condition: boolean=true;
     
    toggle2(){
        this.condition=!this.condition;
    }

    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
    count: number = 5;

    condition1: boolean=true;
    toggle3(){
        this.condition1=!this.condition1;
    }
}
