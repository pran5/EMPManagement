import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Resource } from 'src/app/Resource';

@Component({
  selector: 'app-aresource',
  templateUrl: './aresource.component.html',
  styleUrls: ['./aresource.component.css']
})
export class AresourceComponent implements OnInit {


  public RR: Resource[];



  constructor(private ser: AdminserviceService) {

    this.RR = [];
    
   }
  ngOnInit(): void {

    this.ser.allResource().subscribe(( data : any)=>{
      
      console.log("Resource called");
      console.log(data);
      for(let i = 0; i<data.length; i++){
       let temp : Resource = { };
        temp.rr_Id = data[i].rr_Id;
           temp.rr_Status = data[i].rr_Status;
       temp.rr_Date = data[i].rr_Date;
           temp.rr_Name = data[i].rr_Name;
           temp.rr_Emp_Id = data[i].rr_Emp_Id;
           temp.rr_Description = data[i].rr_Description;
           temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
        
       
        
               
        
        this.RR.push(temp);

      }
      console.log(this.RR);

      
      });

  }
//pending
  showpen(obj:Resource):Boolean{
    if(obj.rr_Status >1 )
    {
      return true;
    }
    return false;
  }
//Result  history(old action histtory)
  showRes(obj:Resource):Boolean{
    if(obj.rr_Status < 2)
    {
      return true;
    }
    return false;
  }

  showStatus(n:Number):Boolean{

    if (n==1) {
      return true;
    }
    return false;
  }

  bto(R:Resource){
    R.rr_Status=1;
    this.ser.ResourceAres(R).subscribe(( data : any)=>{
      this.RR = [];

      this.ser.allResource().subscribe(( data : any)=>{
      
        console.log("Resource called");
        console.log(data);
        for(let i = 0; i<data.length; i++){
          let temp : Resource = { };
          temp.rr_Id = data[i].rr_Id;
             temp.rr_Status = data[i].rr_Status;
         temp.rr_Date = data[i].rr_Date;
             temp.rr_Name = data[i].rr_Name;
             temp.rr_Emp_Id = data[i].rr_Emp_Id;
             temp.rr_Description = data[i].rr_Description;
             temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
          this.RR.push(temp);
  
        }
        console.log(this.RR);
  
        
        });

    });

  }




  bttoo(R:Resource){
    R.rr_Status=0;
    this.ser.ResourceAres(R).subscribe(( data : any)=>{

      this.ser.allResource().subscribe(( data : any)=>{
        this.RR = [];
        console.log("Resource called");
        console.log(data);
        for(let i = 0; i<data.length; i++){
          let temp : Resource = { };
          temp.rr_Id = data[i].rr_Id;
             temp.rr_Status = data[i].rr_Status;
         temp.rr_Date = data[i].rr_Date;
             temp.rr_Name = data[i].rr_Name;
             temp.rr_Emp_Id = data[i].rr_Emp_Id;
             temp.rr_Description = data[i].rr_Description;
             temp.lemp_Name = data[i].employee.emp_Firstname + " " + data[i].employee.emp_Lastname;
          this.RR.push(temp);
  
        }
        console.log(this.RR);
  
        
        });

    });

  }

}
