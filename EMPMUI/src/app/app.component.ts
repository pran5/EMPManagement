import { Component } from '@angular/core';
import { NetServiceService } from './net-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPMUI';

  constructor(private ser: NetServiceService, private router: Router,private route:ActivatedRoute){

  }
  ngOnInit(): void {
      this.ser.loginCheck().subscribe((x:any)=>{
        console.log(x.login);
        if(x.login){
         this.login(x.uname,x.pass);
         }
       });
     
    
  }
  login(uname: String, pass: String){
    console.log("check log");
    this.ser.loga({uname: uname,pass: pass}).subscribe(( data : any)=>{
      console.log(data.length +"  " +data);
     
     
        this.check(data[0]); 
      
     
    });
  }

  check(data:any){
    if(data.Emp_Access == 'A'){
      this.ser.A = data.Emp_Access; this.ser.e = data; 
      this.router.navigate(['./Admin'], { relativeTo: this.route });
     
    }
    else if(data.Emp_Access == 'M'){
      this.ser.A =data.Emp_Access; this.ser.e = data; 
      this.router.navigate(['./Manager'], { relativeTo: this.route });
     
    }
    else if(data.Emp_Access == 'E'){
      this.ser.A = data.Emp_Access; this.ser.e = data;
      this.router.navigate(['./Employee'], { relativeTo: this.route });
      
    }
    else{
      this.ser.A = 'O';
        console.log("Login Fail Please Try Again"); 
       
    }
  }





}

