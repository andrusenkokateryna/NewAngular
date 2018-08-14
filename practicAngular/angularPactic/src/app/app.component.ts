import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPactic';
  name:string = "Tom";
  age = 25;
  count: number=0;
  increase() : void {
  this.count++;
    }

}
