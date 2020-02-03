import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
}
)
export class DescriptioncommserviceService {

  public emitter; 
  public test : "test";
  constructor() { 
    this.emitter = new EventEmitter<any>();
  }
  

  emitJob(job:any)
  {
    this.emitter.emit(job);
  }








}
