import { Component} from '@angular/core';
//import { ChildComponent} from './child.component';

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

}