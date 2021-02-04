import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Emp } from 'src/app/EmpModle';
import { Ticket } from 'src/app/Ticket';

@Component({
  selector: 'app-mticket',
  templateUrl: './mticket.component.html',
  styleUrls: ['./mticket.component.css']
})
export class MTicketComponent implements OnInit {

  priority = "";
  public employee: Emp;
  public id: String = "";
  msg: String = "";
  flag: Boolean = false;
  public emp : any ;
  empid = "";
  Managerid = "";
  projectId = "";
  Tec: Ticket = new Ticket();

  
  constructor(private ser:ManagerService,private ser2:NetServiceService) {
    this.employee = new Emp();
    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
   }

  ngOnInit(): void {
  }

  select(id:String){
    console.log("select called");
    this.ser.getTeamByMeidnEid(this.empid,id).subscribe(( data : any)=>{
      this.employee = new Emp();
      console.log(data);
      if(data!==null){
      this.employee = data.employee;
      this.Managerid = data.manager.m_Id;
      this.projectId = data.manager.m_Project_Id
      this.flag = false;
      }
      else{
        this.msg = "There is no Employee found with EmpID:"+id+" In Your Team";
        this.flag = true;
      }
      console.log(this.employee);
    });
  }

  addTicket(t:Ticket){
    t.kemp_Id = this.id;
    t.kproject_Id = this.projectId;
    t.ticket_Status = "OPEN";
    t.ticket_Update = new Date();

    console.log(t);
    this.ser.insertTicket(t).subscribe((data:any)=>{
      console.log(t);
      this.msg = "Ticket is Assigned Sucsessfully";
        this.flag = true;
    });
  }

}
