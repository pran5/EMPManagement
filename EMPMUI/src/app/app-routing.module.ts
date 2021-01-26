import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { AemployeeComponent } from './admin/aemployee/aemployee.component';
import { ProjectComponent } from './admin/project/project.component';
import { AnotificationComponent } from './admin/anotification/anotification.component';
import { AleaveComponent } from './admin/aleave/aleave.component';
import { AresourceComponent } from './admin/aresource/aresource.component';
import { MProjectprogressComponent } from './manager/mprojectprogress/mprojectprogress.component';
import { MLeaverequestComponent } from './manager/mleaverequest/mleaverequest.component';
import { MRRequestComponent } from './manager/mrrequest/mrrequest.component';
import { MaddmemberComponent } from './manager/maddmember/maddmember.component';
import { MTicketComponent } from './manager/mticket/mticket.component';


const routes: Routes = [
  {path : 'login' , 
    component: LoginComponent,
    children:[
      {path : './Admin' , component: AdminComponent }
    ]
  },
  {path : 'Admin' , component: AdminComponent, children:[{
    path: 'editemp', component:AemployeeComponent
  },
{
  path: 'project', component:ProjectComponent
},
{
  path: 'notification', component:AnotificationComponent
},
{
  path: 'leave', component:AleaveComponent
},
{
  path: 'resource', component:AresourceComponent
}
]
  

},
  {path : 'Manager' , component: ManagerComponent ,children:[{
    path: 'mprojectprogress', component:MProjectprogressComponent
  },
{
  path: 'mleaverequest', component:MLeaverequestComponent
},
{
  path: 'maddmember', component:MaddmemberComponent
},
{
  path: 'mticket', component:MTicketComponent
},
{
  path: 'mrrequest', component:MRRequestComponent
}
]
}, 
  {path : 'Employee' , component: EmployeeComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
