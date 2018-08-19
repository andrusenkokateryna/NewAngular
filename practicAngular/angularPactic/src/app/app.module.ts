import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent }   from './child.component';
import { BoldDirective} from './bold.directive';
import { WhileDirective} from './while.directive';
@NgModule({
  declarations: [
    AppComponent, ChildComponent, BoldDirective, WhileDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
