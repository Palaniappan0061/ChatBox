import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor() { }

  subject:Subject<any>= new Subject<any>();

  send(msg:any){

    this.subject.next(msg);
  }

  receive(){
    return this.subject.asObservable();
  }
}
