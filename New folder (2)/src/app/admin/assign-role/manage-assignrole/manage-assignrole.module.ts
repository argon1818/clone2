import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManageAssignroleComponent } from './manage-assignrole.component';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        SidbaradminModule,
        MatPaginatorModule,
        UiSwitchModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

        
        //SideModule
    ],
    declarations: [
        ManageAssignroleComponent
    ]
    ,exports: [ManageAssignroleComponent],
})
export class ManageAssignroleModule { }
