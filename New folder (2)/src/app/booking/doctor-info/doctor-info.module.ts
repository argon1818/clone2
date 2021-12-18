import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { DoctorInfoComponent } from './doctor-info.component';
import { FooterModule } from 'src/app/menu/footer/footer/footer.module';
import { Sidebar1Module } from 'src/app/menu/sidebar1/sidebar1.module';
import { SidbarIconModule } from 'src/app/menu/sidbar-icon/sidbar-icon.module';
import { LeftRegisterModule } from 'src/app/menu/left-register/left-register.module';
import { ProfileModule } from 'src/app/user/profile/profile.module';
import { NavbarMainModule } from 'src/app/menu/navbar-main/navbar-main.module';
import { GetBookinModule } from '../get-booking/get-booking.module';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';

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
        FooterModule,
        Sidebar1Module,
        NavbarMainModule,
        SidbarIconModule,
        ProfileModule,
        LeftRegisterModule,
        GetBookinModule,

        NgPersianDatepickerModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatInputModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatNativeDateModule,
        NgxLoadingModule.forRoot({})



        //SideModule
    ],
    declarations: [
        DoctorInfoComponent
    ]
    ,exports: [DoctorInfoComponent],
})
export class DoctorInfoModule { }
