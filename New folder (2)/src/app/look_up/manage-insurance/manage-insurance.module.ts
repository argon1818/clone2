import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { AddSecretaryComponent } from 'src/app/secretary/add-secretary/add-secretary.component';
import { DataTablesModule } from 'angular-datatables';
import { DialogeditModule } from 'src/app/admin/dialog/dialogedit/dialogedit.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
import { ManageInsuranceComponent } from './manage-insurance.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserdNavbarModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        DataTablesModule,
        SidbaradminModule,
        NavbarModule,
        DialogeditModule,
        MatPaginatorModule,
        UiSwitchModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        NgxLoadingModule.forRoot({})

    ],
    declarations: [
        ManageInsuranceComponent
    ]
    ,exports: [ManageInsuranceComponent],
})
export class ManageInsuranceModule { }
