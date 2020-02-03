import { Component, OnInit, Input } from '@angular/core';
import { DescriptioncommserviceService } from '../descriptioncommservice.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {

 public job;
  constructor(private descriptioncommservice:DescriptioncommserviceService) { 
    console.log(this.descriptioncommservice.test);
  }

  ngOnInit() {

    console.log("oninit of description compo");
    this.descriptioncommservice.emitter.subscribe(data =>
      {
        console.log('here');
        this.job = data;
        console.log(this.job.name);
      })
  }

  

  


}
