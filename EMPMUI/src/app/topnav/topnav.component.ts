import { Component, OnInit } from '@angular/core';
import { NetServiceService } from '../net-service.service';
import { Emp } from '../EmpModle';
import { Subscription } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

 
  public emp : any ;
  name = "";
  Des = "";
 
  avatar = '../../../assets/images/avatars/alan.jpg';
  constructor(private ser:NetServiceService, private router: Router) { 
    
   console.log(ser.A);
   console.log(ser.e);
   this.emp = ser.e;
   console.log(this.emp);
   this.name = this.emp.Emp_Firstname+" "+this.emp.Emp_Lastname;
   this.Des = this.emp.Emp_Designation;
   
    
    
  }


  ngOnInit(): void {
    this.ser.loginCheck().subscribe((x:any)=>{console.log("============= "+x.message + x.access)});
  }

  logout(){
    this.router.navigate(['./login']);
  }

}
