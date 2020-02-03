import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
  // providedIn: 'root'
)
export class DbserviceService {

  constructor(public http:HttpClient) { }


  findJobs(keyword: string,location:string)
  {
    let params = new HttpParams();
    params = params.append('keyword', keyword);
    params = params.append('location', location);
    return this.http.get(environment.server_url,{params: params});    
  }



}
