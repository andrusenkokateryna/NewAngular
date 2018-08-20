import { Component, OnInit} from '@angular/core';
import { ChildComponent} from './child.component';
import { BoldDirective} from './bold.directive';
import {WhileDirective} from './while.directive';
import {DataService} from './data.service';
import {Phone} from './phone';
import {LogService} from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService,LogService ]
  
})

export class AppComponent implements OnInit {
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

     items1: Phone[] = [];
    constructor(private dataService: DataService){}
     
    addItem(name1: string, price: number){
         
        this.dataService.addData(name1, price);
    }
    ngOnInit(){
        this.items1 = this.dataService.getData();
    }
}
