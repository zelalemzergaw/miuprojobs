import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public keyword;
  public location;

  public list;

  constructor(private route: ActivatedRoute,private db:DbserviceService) {

   }
 

  ngOnInit() {
    this.route.queryParams.subscribe(parameters => {
      //console.log(params['location']);
      //console.log(params['keyword']);
      this.keyword = parameters['keyword'];
      this.location = parameters['location'];

      // let params = new HttpParams();
      // params = params.append('keyword', this.keyword);
      // params = params.append('location', this.location);

      // this.http.get(environment.server_url,{params: params}).subscribe(data =>
      //   {
      //     this.list = data;
      //     console.log("Returned data:     "+data);
      //   })

      this.db.findJobs(this.keyword,this.location).subscribe(data =>
        {
          this.list = data;
          console.log("Returned data:     "+data);
        })





  })

  }

}
