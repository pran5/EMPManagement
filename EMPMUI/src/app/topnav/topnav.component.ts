import { Component, OnInit } from '@angular/core';
import { NetServiceService } from '../net-service.service';
import { Emp } from '../EmpModle';
import { Subscription } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ChatComponent } from './chat/chat.component'
import { NotiComponent } from './noti/noti.component';


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
  constructor(private ser:NetServiceService, private router: Router,private dialogService: NbDialogService) { 
    
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
    this.ser.logout().subscribe((x:any)=>{console.log();
      this.ser.A = 'O';
      this.router.navigate(['./login']);
    });
    
  }


  openWithBackdropClick() {
    this.open(true);
  }
  protected open(closeOnBackdropClick: boolean) {
    this.dialogService.open(ChatComponent, { closeOnBackdropClick });
  }

  openWithBackdropnClick() {
    this.opeen(true);
  }
  protected opeen(closeOnBackdropClick: boolean) {
    this.dialogService.open(NotiComponent, { closeOnBackdropClick });
  }

}
