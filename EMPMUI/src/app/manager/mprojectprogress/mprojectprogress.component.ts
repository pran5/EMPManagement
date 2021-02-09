import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Ticket } from 'src/app/Ticket';

@Component({
  selector: 'app-mprojectprogress',
  templateUrl: './mprojectprogress.component.html',
  styleUrls: ['./mprojectprogress.component.css']
})
export class MProjectprogressComponent implements OnInit {

  public emp : any ;
  empid = "";
  close:number = 0;
  open:number = 0;
  tickets: Array<Ticket> = [];
  constructor(private ser:ManagerService,private ser2:NetServiceService) {
    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
   }

  ngOnInit(): void {

    this.ser.getTicket(this.empid).subscribe((data:any)=>{
      console.log(data);
      for(let i = 0 ; i<data.length ; i++)
      {
        let temp: Ticket = {} ;
        temp.kemp_Id = data[i].employee.emp_Id;
        temp.kproject_Id = data[i].kproject_Id;
        temp.project_Name = data[i].project.project_Name;
        temp.ticket_Details = data[i].ticket_Details;
        temp.ticket_Priority = data[i].ticket_Priority;
        temp.ticket_Status = data[i].ticket_Status;
        temp.ticket_No = data[i].ticket_No;

        if(data[i].ticket_Status == "OPEN"){
          this.open++;
        }
        
        else{
          this.close++;
        }
        temp.ticket_Type = data[i].ticket_Type;
        temp.ticket_Update = data[i].ticket_Update;
        this.tickets.push(temp);
      }

      console.log(this.tickets);

    });

  }

  check(st:String):Boolean{
    if(st =="CLOSE"){
      return false;
    }
    else{
      return true;
    }
  }

  closse(obj:Ticket){
    obj.ticket_Status = "CLOSE";
    this.ser.updateTicket(obj).subscribe((data:any) =>{
      if(data.ticket_Status == "CLOSE"){
      console.log("Updated");
      }

      this.ser.getTicket(this.empid).subscribe((data:any)=>{
        console.log(data);
        this.tickets = [];
        this.open = 0;
        this.close = 0;
        for(let i = 0 ; i<data.length ; i++)
        {
          let temp: Ticket = {} ;
          temp.kemp_Id = data[i].employee.emp_Id;
          temp.kproject_Id = data[i].kproject_Id;
          temp.project_Name = data[i].project.project_Name;
          temp.ticket_Details = data[i].ticket_Details;
          temp.ticket_Priority = data[i].ticket_Priority;
          temp.ticket_Status = data[i].ticket_Status;
          temp.ticket_No = data[i].ticket_No;
  
          if(data[i].ticket_Status == "OPEN"){
            this.open++;
          }
          else{
            this.close++;
          }
          temp.ticket_Type = data[i].ticket_Type;
          temp.ticket_Update = data[i].ticket_Update;
          this.tickets.push(temp);
        }
  
        console.log(this.tickets);
  
      });
    




    });

  }




}
