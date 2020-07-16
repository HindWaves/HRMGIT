import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    child:any;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' ,child:[]},
    { path: '/user/list',         title: 'User',             icon:'nc-diamond',    class: '' ,
    child: [{path: '/user/list',          title: 'List',              icon:'nc-pin-3',      class: ''},

    {path: '/user/create',          title: 'Add Users',              icon:'nc-pin-3',      class: ''}] },
    { path: '/leave/list',          title: 'Leave',              icon:'nc-pin-3',      class: '',
    child: [{path: '/leave/list',          title: 'List',              icon:'nc-pin-3',      class: ''},
    {path: '/leave/create',          title: 'Create Leave',              icon:'nc-pin-3',      class: ''}] },
   { path: '/attendance/list',          title: 'Attendence',              icon:'nc-pin-3',      class: '',
            child: [{path: '/attendance/list',          title: 'List',              icon:'nc-pin-3',      class: ''}] },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
