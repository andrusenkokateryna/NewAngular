import {Input, Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`,
    styles: [` p {color:blue;
    	    		font-size:20px}`]
})
export class ChildComponent { 
   @Input() userName: string;
   @Input() userAge: number;
}