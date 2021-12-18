import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { DashboardadminComponent } from './dashboardadmin.component';
import { UserdNavbarModule } from '../../menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

        //SideModule
    ],
    declarations: [
        DashboardadminComponent
    ]
    ,exports: [DashboardadminComponent],
})
export class DashboardadminModule { }
