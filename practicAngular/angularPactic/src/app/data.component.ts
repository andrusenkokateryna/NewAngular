import { Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Phone} from './phone';

@Component({
    selector: 'data-comp',
    templateUrl: './data.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService, LogService]//если эту строчку удалить, то добавление строчки в один обьект
    									//будет отображаться и в другом обьекте
})

export class DataComponent implements OnInit { 
     
    items1: Phone[] = [];
    constructor(private dataService: DataService){}
     
    addItem1(name1: string, price: number){
         
        this.dataService.addData(name1, price);
    }
    ngOnInit(){
        this.items1 = this.dataService.getData();
    }
}