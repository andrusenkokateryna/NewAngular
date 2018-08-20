import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent }   from './child.component';
import { BoldDirective} from './bold.directive';
import { WhileDirective} from './while.directive';
import {DataService} from './data.service';
import {LogService} from './log.service';
import { DataComponent }   from './data.component';


@NgModule({
  declarations: [
    AppComponent, ChildComponent, BoldDirective, WhileDirective, DataComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
