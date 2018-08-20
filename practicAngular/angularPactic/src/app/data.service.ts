import {Phone} from './phone';
import {Injectable} from '@angular/core';
import {LogService} from './log.service';



@Injectable() 
export class DataService{
 
    private data: Phone[] = [
        { name1:"Apple iPhone 7", price: 56000},
        { name1: "HP Elite x3", price: 56000},
        { name1: "Alcatel Idol S4", price: 25000}
    ];
   constructor(private logService: LogService){}
     
    getData(): Phone[] {
         
        this.logService.write("операция получения данных");
        return this.data;
    }
    addData(name1: string, price: number){
         
        this.data.push(new Phone(name1, price));
        this.logService.write("операция добавления данных");
    }
}