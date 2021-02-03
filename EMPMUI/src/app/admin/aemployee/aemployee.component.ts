import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/EmpModle';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-aemployee',
  templateUrl: './aemployee.component.html',
  styleUrls: ['./aemployee.component.css']
})
export class AemployeeComponent implements OnInit {

  employee : Emp;
  selectedPaySlab = "";
  Gender = "";
  Designation = "";
  Department = "";
  selectAccesLevel= "";
  id = '';
  msg = '';
  constructor(private ser : AdminserviceService) {
    this.employee = new Emp();
   }

  ngOnInit(): void {
  }

  addEmp(em:Emp){
    if(this.id.length<3){
      this.msg = "Please enter Employee ID";
    }
    else{
    em.emp_Id = this.id;
    console.log("add clicked");
    this.ser.insertEmp(em).subscribe(( data : any)=>{
      this.msg = "New Employee Inserted..."
      if(em.emp_Designation == 'Manager'){
       let obj:any = {
        m_Id: 'M'+em.emp_Id.substr(1),
        m_Emp_Id: em.emp_Id
        }

        this.ser.insertMan(obj).subscribe((data:any)=>{

          console.log(obj);
        })
      }
      console.log(data);
      this.employee = new Emp();
    });
  }
  }

  select(id:String){
    this.msg = "";
    this.employee = new Emp();
    console.log("select called");
    this.ser.singleSelect(id).subscribe(( data : any)=>{
      if(data!==null){
      console.log(data);
      this.employee = data;
      }
    });
  }

  update(em:Emp){
    console.log("update clicked");
    this.ser.updateEmp(em).subscribe(( data : any)=>{
      this.msg = "Employee Updated...";
      console.log(data);
    });
  }



}
