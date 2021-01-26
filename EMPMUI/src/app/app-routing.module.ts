import { NgModule, Component } from '@angular/core';
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
import { DashbordComponent } from './employee/dashbord/dashbord.component';
import { TeamComponent } from './employee/team/team.component';
import { LeadingComment } from '@angular/compiler';
import { LeaveComponent } from './employee/leave/leave.component';
import { ResourceComponent } from './employee/resource/resource.component';

const routes: Routes = [
  {path : 'login' , 
    component: LoginComponent,
    children:[
      {path : './Admin' , component: AdminComponent}
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
  {path : 'Manager' , component: ManagerComponent },
  {path : 'Employee' , component: EmployeeComponent, children : [
    { path : 'Dashbord', component: DashbordComponent },
    { path : 'Team' , component:  TeamComponent},
    { path: 'LeaveR' , component: LeaveComponent},
    { path: 'eResource' , component: ResourceComponent} 
  ]},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
