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
  selectAccesLevel= "";
  constructor(private ser : AdminserviceService) {
    this.employee = new Emp();
   }

  ngOnInit(): void {
  }

  addEmp(em:Emp){

    console.log("add clicked");
    this.ser.insertEmp(em).subscribe(( data : any)=>{
      console.log(data);
    });
  }

  select(id:String){
    console.log("select called");
    this.ser.singleSelect(id).subscribe(( data : any)=>{
      console.log(data);
      this.employee = data;
    });
  }

  update(em:Emp){
    console.log("update clicked");
    this.ser.updateEmp(em).subscribe(( data : any)=>{
      console.log(data);
    });
  }

}
