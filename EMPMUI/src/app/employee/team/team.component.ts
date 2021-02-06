import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Custom } from 'src/custom';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public emp : any ;
  empid = "";
  public apidataa: Array<Custom> = [];
  constructor(private ser:EmployeeService,private ser2:NetServiceService) { 
    
    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;

  }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
this.ser.getsTeams(this.empid).subscribe((data:any)=>{
  console.log(data);
  this.apidataa = [];
  for(let i = 0 ; i<data.pp.length ; i++){
    let temp: Custom = {};
    temp.roll = [];
    temp.employeeName = [];
    temp.employeeId = []; 
      temp.projectName = data.pp[i].project_Name;
      for(let j = 0 ; j < data.tt[i].length; j++) {
        temp.roll.push(data.tt[i][j].employee.emp_Designation);
        temp.employeeName.push(data.tt[i][j].employee.emp_Firstname+" "+data.tt[i][j].employee.emp_Lastname);
        temp.employeeId.push(data.tt[i][j].employee.emp_Id);
      }
      this.apidataa.push(temp);
  }
  console.log(this.apidataa);

  
});
  }

}
