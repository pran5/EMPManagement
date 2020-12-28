import { Component, OnInit } from '@angular/core';

import { Emp } from '../EmpModle';
import { NetServiceService } from '../net-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  e : Emp;
  constructor(private ser : NetServiceService) {
    this.e = new Emp();
   }

  ngOnInit(): void {
  }

  nodeCall(){

    console.log("click working");
    this.ser.allEmp({v1:88,v2:99}).subscribe((data : any)=>{
      if ( data.status === 1)
      {
        console.log(data.content);
      
          this.e.EmpId = data.content[0].Emp_id;
          this.e.EmpName = data.content[0].Emp_name;

          this.e.EmpEmail = data.content[0].Emp_email;
         
        
      }
    });

  }

  springCall(){

    console.log("click working");
    this.ser.allEmpSpring().subscribe((data : any)=>{
     
        console.log(data);
      
          // this.e.EmpId = data.content[0].Emp_id;
          // this.e.EmpName = data.content[0].Emp_name;

          // this.e.EmpEmail = data.content[0].Emp_email;
         
        
      
    });

  }

}
