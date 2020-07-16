import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UserlistComponent } from 'app/pages/user/list/userlist.component';
import { CreateuserComponent } from 'app/pages/user/createuser/createuser.component';
import { LeaveListComponent } from 'app/pages/leaves/list/leavelist.component';
import { CreateleaveComponent } from 'app/pages/leaves/createleave/createleave.component';
import { AttendancelistComponent } from 'app/pages/attendance/list/attendancelist.component';
import { CreateattendanceComponent } from 'app/pages/attendance/createattendance/createattendance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'user/list',           component: UserlistComponent },
    { path: 'user/create',           component: CreateuserComponent },
    { path: 'leave/list',           component: LeaveListComponent },
    { path: 'leave/create',           component: CreateleaveComponent },
    { path: 'attendance/list',           component: AttendancelistComponent },
    { path: 'attendance/create',           component: CreateattendanceComponent }
];
