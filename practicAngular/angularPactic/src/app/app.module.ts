import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent }   from './child.component';
import { BoldDirective} from './bold.directive';
@NgModule({
  declarations: [
    AppComponent, ChildComponent, BoldDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
