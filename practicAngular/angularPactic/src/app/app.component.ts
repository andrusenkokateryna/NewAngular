import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* template:  `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="text" [(ngModel)]="name" />`,
    styles: [`p {color:red;}`]*/
})
export class AppComponent {
  title = 'angularPactic';
  name:string = "Kate";
  age = 24;
  /*count: number=0;
  increase() : void {
  this.count++;*/
   clicks:number = 0;
    onChanged(increased:any){
     increased==true?this.clicks++:this.clicks--;
    }

}
