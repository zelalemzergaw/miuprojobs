import { Component, OnInit, Input } from '@angular/core';
import { DescriptioncommserviceService } from '../descriptioncommservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() jobs : any[];

  constructor(private descriptioncommservice:DescriptioncommserviceService) { }

  ngOnInit() {
  }

  show_description(job)
  {
    this.descriptioncommservice.emitJob(job);
    console.log(job.id);
  }

  
}


