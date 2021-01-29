import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Leave } from 'src/app/LeaveReq';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  public emp : any ;
  empid = "";
  public lev: Leave;
  public olev : Array<Leave> = [];
  constructor(private ser:EmployeeService,private ser2:NetServiceService) { 

    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
    this.lev = new Leave();
  }

  ngOnInit(): void {

    this.getLeaveReq();

  }

  insLeave(l:Leave) {
    this.lev = new Leave();
    l.lrequest_A_Status = 2;
    l.lrequest_M_Status = 2;
    l.lrequest_Emp_Id = this.empid;
    

    this.ser.insertLeave(l).subscribe((data:any)=>{
        console.log(data +" inserted");
        this.getLeaveReq();
        
    });
  }
  getLeaveReq() {

    this.ser.getLeave(this.empid).subscribe((data:any)=>{
      
      this.olev = [];
      for(let i = 0; i<data.length; i++){
        let temp: Leave = {};
        temp.lrequest_From = data[i].lrequest_From;
        temp.lrequest_To = data[i].lrequest_To;
        temp.lrequest_Description =data[i].lrequest_Description;
        temp.lrequest_M_Status = data[i].lrequest_M_Status;
        temp.lrequest_A_Status = data[i].lrequest_A_Status;
        this.olev.push(temp);
      }
      console.log(this.olev);
    });
  }

  getr(a:Number,m:Number):String{
   
    if(m==0){
      return "Rejected";
    }
    else if(a==1){
      return "Accepted";
    }
    else if(m==1 && a==2){
      return "Pending";
    }
    else if(m==2 && a==2){
      return "Pending";
    }

    else {
      return "Rejected";
    }
    
  }

  gr(st:String):Boolean{
    if(st==="Accepted"){
      return true;
    }
    return false;
  }
  rd(st:String):Boolean{
    if(st==="Rejected"){
      return true;
    }
    return false;
  }
  bl(st:String):Boolean{
    if(st==="Pending"){
      return true;
    }
    return false;
  }

}
