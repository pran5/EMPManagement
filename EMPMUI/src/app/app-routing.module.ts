import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path : 'login' , 
    component: LoginComponent,
    children:[
      {path : './Admin' , component: AdminComponent}
    ]
  },
  {path : 'Admin' , component: AdminComponent},
  {path : 'Manager' , component: ManagerComponent},
  {path : 'Employee' , component: EmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
