import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Leave } from 'src/app/LeaveReq';
import { NetServiceService } from 'src/app/net-service.service';
import { Emp } from 'src/app/EmpModle';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-mleaverequest',
  templateUrl: './mleaverequest.component.html',
  styleUrls: ['./mleaverequest.component.css']
})
export class MLeaverequestComponent implements OnInit {

  public LR: Leave[];
  public employee: Emp;
  public emp : any ;
  empid = "";
  public lev: Leave;
  public olev : Array<Leave> = [];
  


  constructor(private ser: ManagerService,private ser2:NetServiceService) { 
    this.LR = [];
    this.employee = new Emp();
    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
    this.lev = new Leave();
  }

  ngOnInit(): void {
    this.selectAllLeave();
    this.getLeaveReq();
  }

  showp(obj:Leave):Boolean{
    if(obj.lrequest_M_Status==2 )
    {
      return true;
    }
    return false;
  }

  showR(obj:Leave):Boolean{
    if(obj.lrequest_M_Status < 2)
    {
      return true;
    }
    return false;
  }

  showStatus(n:Number):Boolean{

    if (n==1) {
      return true;
    }
    return false;
  }

  selectAllLeave(){
    this.ser.getLeaves(this.empid).subscribe(( data : any)=>{
      this.LR = [];
      console.log("leave called");
      console.log(data);
      for(let i = 0; i<data.length; i++){
        for(let j = 0; j<data[i].length; j++){
          let temp : Leave = { };
        temp.lrequest_Id = data[i][j].lrequest_Id;
        temp.lrequest_Emp_Id = data[i][j].lrequest_Emp_Id;
        temp.lemp_Name = data[i][j].employee.emp_Firstname + " " + data[i][j].employee.emp_Lastname;
        temp.lrequest_Description = data[i][j].lrequest_Description;
        temp.lrequest_A_Status = data[i][j].lrequest_A_Status;
        temp.lrequest_M_Status = data[i][j].lrequest_M_Status;
        temp.lrequest_To = data[i][j].lrequest_To;
        temp.lrequest_From = data[i][j].lrequest_From;
        this.LR.push(temp);
        }
       

      }
      console.log(this.LR);

      
      });
  }

  btt(l:Leave){
    l.lrequest_M_Status=1;
    this.ser.leaveAres(l).subscribe(( data : any)=>{

      this.selectAllLeave();
    });
  }

  bttt(l:Leave){
    l.lrequest_M_Status=0;
    this.ser.leaveAres(l).subscribe(( data : any)=>{

      this.selectAllLeave();
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

  insLeave(l:Leave) {
    this.lev = new Leave();
    l.lrequest_A_Status = 2;
    l.lrequest_M_Status = 1;
    l.lrequest_Emp_Id = this.empid;
    

    this.ser.insertLeave(l).subscribe((data:any)=>{
        console.log(data +" inserted");
        this.getLeaveReq();
        
    });
  }

}
