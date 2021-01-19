import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NbSidebarService, NbThemeModule, NbInputModule, NbActionsModule, NbUserModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule  } from '@nebular/theme';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    EmployeeComponent,
    SidenavComponent,
    TopnavComponent
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
    NbUserModule

  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
