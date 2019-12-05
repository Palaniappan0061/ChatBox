import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/service/chat-service.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private chatService:ChatServiceService) { }

  info:string='';
  message:any=[];
  dt:Date= new Date();

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
