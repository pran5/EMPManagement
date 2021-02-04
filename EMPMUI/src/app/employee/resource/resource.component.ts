import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { NetServiceService } from 'src/app/net-service.service';
import { Resource } from 'src/app/Resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  public emp : any ;
  empid = "";
  res: Resource;
  r: Array<Resource> = [];

  constructor(private ser:EmployeeService,private ser2:NetServiceService) { 

    this.emp = ser2.e;
    this.empid = this.emp.Emp_Id;
    this.res = new Resource();
  }

  ngOnInit(): void {
    this.getResource();
  }

  getResource(){
    this.ser.getResource(this.empid).subscribe((data:any)=>{
      this.r = [];
      for(let i = 0; i<data.length ; i++)
      {
        let temp: Resource = {};
        temp.rr_Name = data[i].rr_Name;
        temp.rr_Status = data[i].rr_Status;
        temp.rr_Description = data[i].rr_Description;
        temp.rr_Date = data[i].rr_Date;
        this.r.push(temp);
      }
      
    });
    
  }

  gr(st:Number):Boolean{
    if(st===1){
      return true;
    }
    return false;
  }
  rd(st:Number):Boolean{
    if(st===0){
      return true;
    }
    return false;
  }
  bl(st:Number):Boolean{
    if(st===2){
      return true;
    }
    return false;
  }

  genrateReq(re:Resource){
    re.rr_Emp_Id = this.empid;
    re.rr_Status = 2;
    re.rr_Date = new Date();
    this.ser.insertResource(re).subscribe((data:any)=>{
      console.log("inserted Resource");
      this.getResource();
      this.res = new Resource();
    })
  }

}
