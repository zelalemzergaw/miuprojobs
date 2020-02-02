import { from } from 'rxjs';
import { Component,Input,OnChanges} from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miuprojobs';
  form;
  ngOnInit(){
    this.form=new FormGroup({
      categories:new FormControl(""),
      location: new FormControl(""),

    });
  }
  onSubmit =function(user) { 
   console.log(user);
    
  }
}
