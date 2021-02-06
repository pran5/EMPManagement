import { Component, OnInit } from '@angular/core';
import { NetServiceService } from 'src/app/net-service.service';
import { serialize } from 'v8';
import { Notify } from 'src/app/Notification';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {

  notif : Array<Notify> = [];
  Acc= ''
  emp:any;
  constructor(private ser:NetServiceService) { 
   
    this.emp = ser.e;
    this.Acc = this.emp.Emp_Access;
  }

  ngOnInit(): void {

    this.ser.getnotification().subscribe((data:any)=>{
      console.log(data);
      if(data!==null){
        this.notif = data;
      }  
     
    });
  }

  check(a:String):boolean{
    if(this.Acc=='M' || this.Acc=='A'){
      return true;
    }
    else{
      if(a=='A'){
        return true;
      }
      else{
        return false;
      }
    }
  }

}
