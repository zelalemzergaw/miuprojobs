import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
