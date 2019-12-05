import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/service/chat-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private chatService:ChatServiceService) { }

  info:string='';
  dt:Date= new Date();
  message:any=[];

  ngOnInit() {

    this.chatService.receive().subscribe((info)=>{

      this.message.push(this.info);
      this.message.push(this.dt);
    });
  }

  send(){
    
 this.chatService.send(this.info);
 
    
   
  }

}
