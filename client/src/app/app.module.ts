import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform.component';

import {Routes , RouterModule} from '@angular/router';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DbserviceService } from './dbservice.service';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';
import { DescriptioncommserviceService } from './descriptioncommservice.service';


const routes: Routes = [
  {path:  '' , redirectTo: 'home', pathMatch: 'full' },
  {path:  'home' , component:SearchformComponent },
  {path:  'result' , component:ResultComponent },
  {path:  '**' , redirectTo: 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    ResultComponent,
    NavbarComponent,
    FilterComponent,
    ListComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
