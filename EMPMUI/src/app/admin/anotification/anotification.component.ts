import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Notify } from 'src/app/Notification';

@Component({
  selector: 'app-anotification',
  templateUrl: './anotification.component.html',
  styleUrls: ['./anotification.component.css']
})
export class AnotificationComponent implements OnInit {

  public NT: Notify;

  constructor(private ser: AdminserviceService) {

 this.NT = new Notify();


   }

  ngOnInit(): void {
  }



sendtoM(obj:Notify){
  obj.pn_Level="M";
  obj.pn_Date_Time =  new Date();
  obj.pn_Emp_Id = "E001";
  this.ser.insertPushnotification(obj).subscribe(( data : any)=>{

  console.log("Insert called");
  
  });

}

  sendtoE(obj:Notify){
    obj.pn_Level="A";
    obj.pn_Date_Time =  new Date();
    obj.pn_Emp_Id = "E001";
    this.ser.insertPushnotification(obj).subscribe(( data : any)=>{
  
    console.log("Insert called");
    
    });
  
  }




















}
