import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { BookingUserComponent } from './booking-user.component';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

const maskConfig: Partial<IConfig> = {
    validation: false,
  };
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        DataTablesModule,
        SidbaradminModule,
        NavbarModule,
        MatPaginatorModule,
        UiSwitchModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})


        //SideModule
    ],
    declarations: [
        BookingUserComponent
    ]
    ,exports: [BookingUserComponent],
})
export class BookingUserModule { }
