import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../EmpModle';
import { NetServiceService } from '../net-service.service';

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
    this.access = "a";
   }

  ngOnInit(): void {
  }

  loginVisible(): boolean{
    var a = true;
    console.log("check working");
    if(this.access=="o"){
      console.log(a);
    return a;}

    else {
      a = false;
      console.log(a);
    return a;}
  }

  login(){
    console.log("login clicked");
    this.ser.loga({uname:this.uname,pass:this.pass}).subscribe(( data : any)=>{
      console.log(data);
      if(data.access == 'a'){
        this.router.navigate(['./Admin'], { relativeTo: this.route });
        this.access ='a';
      }
      else if(data.access == 'm'){
        this.router.navigate(['./Manager'], { relativeTo: this.route });
        this.access ='m';
      }
      else if(data.access == 'e'){
        this.router.navigate(['./Employee'], { relativeTo: this.route });
        this.access ='e';
      }
      else{
          this.msg = data.msg; 
          this.access ='o';
      }
    });
  }
  nodeCall(){

    console.log("click working");
    this.ser.allEmp({v1:88,v2:99}).subscribe((data : any)=>{
      if ( data.status === 1)
      {
        console.log(data.content);
      
          // this.e.EmpId = data.content[0].Emp_id;
          // this.e.EmpName = data.content[0].Emp_name;

          // this.e.EmpEmail = data.content[0].Emp_email;
         
        
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
