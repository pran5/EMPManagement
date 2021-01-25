import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Leave } from 'src/app/LeaveReq';

@Component({
  selector: 'app-aleave',
  templateUrl: './aleave.component.html',
  styleUrls: ['./aleave.component.css']
})
export class AleaveComponent implements OnInit {


  public LR: Leave[];



  constructor(private ser: AdminserviceService) {

    this.LR = [];
    
   }

  ngOnInit(): void {

    this.ser.allleavereq().subscribe(( data : any)=>{
      
      console.log("leave called");
      console.log(data);
      for(let i = 0; i<data.length; i++){
       let temp : Leave = { };
        temp.lrequest_Id = data[i].lrequest_Id;
        temp.lrequest_Emp_Id = data[i].lrequest_Emp_Id;
        temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
        temp.lrequest_Description = data[i].lrequest_Description;
        temp.lrequest_A_Status = data[i].lrequest_A_Status;
        temp.lrequest_M_Status = data[i].lrequest_M_Status;
        temp.lrequest_To = data[i].lrequest_To;
        temp.lrequest_From = data[i].lrequest_From;
        this.LR.push(temp);

      }
      console.log(this.LR);

      
      });

  }

  showp(obj:Leave):Boolean{
    if(obj.lrequest_M_Status==1 && obj.lrequest_A_Status > 1)
    {
      return true;
    }
    return false;
  }

  showR(obj:Leave):Boolean{
    if(obj.lrequest_A_Status < 2)
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

  btt(l:Leave){
    l.lrequest_A_Status=1;
    this.ser.leaveAres(l).subscribe(( data : any)=>{
      this.LR = [];

      this.ser.allleavereq().subscribe(( data : any)=>{
      
        console.log("leave called");
        console.log(data);
        for(let i = 0; i<data.length; i++){
         let temp : Leave = { };
          temp.lrequest_Id = data[i].lrequest_Id;
          temp.lrequest_Emp_Id = data[i].lrequest_Emp_Id;
          temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
          temp.lrequest_Description = data[i].lrequest_Description;
          temp.lrequest_A_Status = data[i].lrequest_A_Status;
          temp.lrequest_M_Status = data[i].lrequest_M_Status;
          temp.lrequest_To = data[i].lrequest_To;
          temp.lrequest_From = data[i].lrequest_From;
          this.LR.push(temp);
  
        }
        console.log(this.LR);
  
        
        });

    });

  }




  bttt(l:Leave){
    l.lrequest_A_Status=0;
    this.ser.leaveAres(l).subscribe(( data : any)=>{

      this.ser.allleavereq().subscribe(( data : any)=>{
        this.LR = [];
        console.log("leave called");
        console.log(data);
        for(let i = 0; i<data.length; i++){
         let temp : Leave = { };
          temp.lrequest_Id = data[i].lrequest_Id;
          temp.lrequest_Emp_Id = data[i].lrequest_Emp_Id;
          temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
          temp.lrequest_Description = data[i].lrequest_Description;
          temp.lrequest_A_Status = data[i].lrequest_A_Status;
          temp.lrequest_M_Status = data[i].lrequest_M_Status;
          temp.lrequest_To = data[i].lrequest_To;
          temp.lrequest_From = data[i].lrequest_From;
          this.LR.push(temp);
  
        }
        console.log(this.LR);
  
        
        });

    });

  }



}
