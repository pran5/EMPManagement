import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../EmpModle';
import { NetServiceService } from '../net-service.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { checkServerIdentity } from 'tls';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  e : Emp;
  uname: String;
  pass: String;
  access: String;
  msg: String;
  constructor(private ser : NetServiceService,private router: Router, private route:ActivatedRoute) {
    this.e = new Emp();
    this.uname = "";
    this.pass = "";
    this.msg = "";
    this.access = this.ser.A; 
   }

  ngOnInit(): void {
    // this.ser.loginCheck().subscribe((x:any)=>{console.log("============= " + x.Emp_Access); this.check(x);});
    this.access = this.ser.A; 
    console.log(this.ser.A);
  }

  loginVisible(): boolean{
    var a = true;
   
    if(this.ser.A=="O"){
     
    return a;}

    else {
      a = false;
     
    return a;}
  }

  login(){
    console.log("login clicked");
    this.ser.loga({uname:this.uname,pass:this.pass}).subscribe(( data : any)=>{
      console.log(data.length +"  " +data);
      if(!Array.isArray(data)){
        this.msg = "Login Fail Please Try Again"; 
        console.log(this.msg);
     }
      else{
        this.check(data[0]); 
      }
     
    });
  }

  check(data:any){
    if(data.Emp_Access == 'A'){
      this.ser.A = data.Emp_Firstname; this.ser.e = data; console.log(this.e);
      this.router.navigate(['./Admin'], { relativeTo: this.route });
      this.access ='A';
    }
    else if(data.Emp_Access == 'M'){
      this.ser.A = data.Emp_Firstname; this.ser.e = data; console.log(this.e);
      this.router.navigate(['./Manager'], { relativeTo: this.route });
      this.access ='M';
    }
    else if(data.Emp_Access == 'E'){
      this.ser.A = data.Emp_Firstname; this.ser.e = data; console.log(this.e);
      this.router.navigate(['./Employee'], { relativeTo: this.route });
      this.access ='E';
    }
    else{
        this.msg = "Login Fail Please Try Again"; 
        this.access ='O';
    }
  }
  // nodeCall(){

  //   console.log("click working");
  //   this.ser.allEmp({v1:88,v2:99}).subscribe((data : any)=>{
  //     if ( data.status === 1)
  //     {
  //       console.log(data.content);
      
  //         // this.e.EmpId = data.content[0].Emp_id;
  //         // this.e.EmpName = data.content[0].Emp_name;

  //         // this.e.EmpEmail = data.content[0].Emp_email;
         
        
  //     }
  //   });

  // }

  // springCall(){

  //   console.log("click working");
  //   this.ser.allEmpSpring().subscribe((data : any)=>{
     
  //       console.log(data);
      
  //         // this.e.EmpId = data.content[0].Emp_id;
  //         // this.e.EmpName = data.content[0].Emp_name;

  //         // this.e.EmpEmail = data.content[0].Emp_email;
         
        
      
  //   });

  // }

}
