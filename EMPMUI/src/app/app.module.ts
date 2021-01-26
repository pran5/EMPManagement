import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NbSidebarService, NbThemeModule, NbInputModule, NbActionsModule, NbUserModule, NbFormFieldModule, NbIconComponent, NbIconModule, NbSelectComponent, NbSelectModule, NbDatepickerModule, NbStepperModule, NbTabsetModule, NbAccordionModule, NbProgressBarModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule  } from '@nebular/theme';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AemployeeComponent } from './admin/aemployee/aemployee.component';
import { ProjectComponent } from './admin/project/project.component';
import { AnotificationComponent } from './admin/anotification/anotification.component';
import { AleaveComponent } from './admin/aleave/aleave.component';
import { AresourceComponent } from './admin/aresource/aresource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MsidenavComponent } from './manager/msidenav/msidenav.component';
import { MLeaverequestComponent } from './manager/mleaverequest/mleaverequest.component';
import { MProjectprogressComponent } from './manager/mprojectprogress/mprojectprogress.component';
import { MRRequestComponent } from './manager/mrrequest/mrrequest.component';
import { MaddmemberComponent } from './manager/maddmember/maddmember.component';
import { MTicketComponent } from './manager/mticket/mticket.component';
=======
import { EsidenavComponent } from './employee/esidenav/esidenav.component';
import { DashbordComponent } from './employee/dashbord/dashbord.component';
import { TeamComponent } from './employee/team/team.component';
import { LeaveComponent } from './employee/leave/leave.component';
import { ResourceComponent } from './employee/resource/resource.component';
import { TicketComponent } from './employee/dashbord/ticket/ticket.component';
import { ProgressComponent } from './employee/dashbord/progress/progress.component';
>>>>>>> nikhil-branch

 




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    EmployeeComponent,
    SidenavComponent,
    TopnavComponent,
    AemployeeComponent,
    ProjectComponent,
    AnotificationComponent,
    AleaveComponent,
    AresourceComponent,
<<<<<<< HEAD
    MsidenavComponent,
    MProjectprogressComponent,
    MLeaverequestComponent,
    MRRequestComponent,
    MaddmemberComponent,
    MTicketComponent
    
=======
    EsidenavComponent,
    DashbordComponent,
    TeamComponent,
    LeaveComponent,
    ResourceComponent,
    TicketComponent,
    ProgressComponent
>>>>>>> nikhil-branch
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbUserModule,
    NbFormFieldModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbStepperModule,
    NbTabsetModule,
    NbAccordionModule,
    BrowserAnimationsModule,
    NbProgressBarModule,
    NbUserModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
