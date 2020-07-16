import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserlistComponent } from './pages/user/list/userlist.component';
import { CreateuserComponent } from './pages/user/createuser/createuser.component';
import { LeaveListComponent } from './pages/leaves/list/leavelist.component';
import { CreateleaveComponent } from './pages/leaves/createleave/createleave.component';
import { AttendancelistComponent } from './pages/attendance/list/attendancelist.component';
import { CreateattendanceComponent } from './pages/attendance/createattendance/createattendance.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserlistComponent,
    CreateuserComponent,
    LeaveListComponent,
    CreateleaveComponent,
    AttendancelistComponent,
    CreateattendanceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
