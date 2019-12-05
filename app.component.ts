import { Component, SystemJsNgModuleLoader } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Subject, BehaviorSubject, ReplaySubject, } from 'rxjs';
import{map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkApp';

  //subject:Subject<string>= new Subject<string>();
subject:BehaviorSubject<string>= new BehaviorSubject<string>("Hello1");
//subject:ReplaySubject<string>= new ReplaySubject<string>();

ngOnInit(){

  this.subject.next("Hello");
  this.subject.next("Hi");
  this.subject.pipe(map(data =>"Bye")).subscribe((data)=>{
console.log(data);
  },(err)=>{
    console.log(err);
  },()=>{
    console.log();
  });
  
  this.subject.next("Hello World");
  this.subject.next("Bye");
  this.subject.error("Error");
  this.subject.complete();

  
  

 
}
  
   

 

}
