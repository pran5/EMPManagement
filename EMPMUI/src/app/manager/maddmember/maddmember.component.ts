import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Emp } from 'src/app/EmpModle';
import { Custom } from 'src/custom';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-maddmember',
  templateUrl: './maddmember.component.html',
  styleUrls: ['./maddmember.component.css']
})
export class MaddmemberComponent implements OnInit {

  public employee: Emp;
  public id: String = "";
  msg: String = "";
  flag: Boolean = false;
  public emp : any ;
  empid = "";
  Managerid = "";
  
  public apidataa: Custom = {};
  constructor(private ser:ManagerService,private ser2:NetServiceService) { 
    this.employee = new Emp();
    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
    
  }

  ngOnInit(): void {
    this.getTeamM();
  }

  select(id:String){
    console.log("select called");
    this.ser.singleSelect(id).subscribe(( data : any)=>{
      this.employee = new Emp();
      console.log(data);
      if(data!==null){
      this.employee = data;
      this.flag = false;
      }
      else{
        this.msg = "No Employee Found";
        this.flag = true;
      }
    });
  }

  getTeamM(){
    this.ser.getTeam(this.empid).subscribe((data:any)=>{
      console.log(data);
      this.apidataa = {};
      this.apidataa.employeeId = [];
      this.apidataa.employeeName = [];
      this.apidataa.roll = [];
      this.Managerid = data[0].team_M_Id;
      for(let i = 0; i<data.length; i++){
        this.apidataa.employeeId.push(data[i].employee.emp_Id);
        this.apidataa.employeeName.push(data[i].employee.emp_Firstname+" "+data[i].employee.emp_Lastname);
        this.apidataa.roll.push(data[i].employee.emp_Designation);
      }
      console.log(this.apidataa);
    });

  }

  addTeamMember(id:String){
    let obj = {
      t_Emp_Id: id,
      team_M_Id: this.Managerid
    };
    
    console.log(obj,id,this.Managerid+"---------------------");
        this.ser.insertMember(obj).subscribe((data:any)=>{

          this.getTeamM();
        });
  }

}
