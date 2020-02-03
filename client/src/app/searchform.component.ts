import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  public keyword;
  public location;

  constructor(private router: Router) {
    this.keyword = "Job Title Or Company Name";
    this.location = "Location";

   }

  ngOnInit() {
  }


  onSubmit()
  {
   // console.log(this.location);
    this.router.navigate(['result'],{queryParams: {keyword : this.keyword, location : this.location}});
  }
  

}
