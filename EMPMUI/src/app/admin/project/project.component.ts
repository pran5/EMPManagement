import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { AdminserviceService } from 'src/app/adminservice.service';
import { project } from 'src/ProjectModel';
import { Custom } from 'src/custom';
import { empty } from 'rxjs';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public client : Client;
  public project : project;
  public custom : Custom[];
  public doughnutChartLabels: string[] = [ 'Complete', 'Incomplete'];
  public doughnutChartData: number[] = [90,10];
  colors = ['#34a853', '#FBBC05'];
  chartOptions = {
    responsive: true,
    legend: {
      display: false
   } 
  };
  constructor(private ser:AdminserviceService) {
    this.client = new Client();
    this.project = new project();
    this.custom = [];
   }

  ngOnInit(): void {
    this.ser.allprojects().subscribe(( data : any)=>{
      console.log("************************************************************");
      console.log(data , data.pp.length);
      for(let i = 0;i<data.pp.length;i++){
        console.log("--------------------------------" + i);
        // this.custom[i].projectName = data.pp[i].project_Name;
        let temp: Custom = {};
        temp.employeeName = [];
        temp.employeeId = [];
        temp.roll = [];
      temp.projectName = data.pp[i].project_Name;
      
      for(let j = 0; j<data.tt[i].length;j++){
        temp.employeeName.push(data.tt[i][j].employee.emp_Firstname+" "+data.tt[i][j].employee.emp_Lastname);
        temp.roll.push(data.tt[i][j].employee.emp_Designation);
        temp.employeeId.push(data.tt[i][j].employee.emp_Id);
      }
      
      this.custom.push(temp); 
      }
      console.log(this.custom);
      console.log(this.custom);
      console.log("************************************************************");
    });
  }

  addClient(cl:Client){
    console.log("client insert");
    this.ser.insertClient(cl).subscribe(( data : any)=>{
      console.log(data);
    });
  }

  addProject(pro:project){
    console.log("Project insert");
    this.ser.insertProject(pro).subscribe(( data : any)=>{
      console.log(data);
    });
  }

}
