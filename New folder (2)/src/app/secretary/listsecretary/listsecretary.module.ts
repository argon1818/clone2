import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { ListsecretaryComponent } from './listsecretary.component';
import { DataTablesModule } from 'angular-datatables';
import { DialogeditModule } from 'src/app/admin/dialog/dialogedit/dialogedit.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';

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
      DialogeditModule,
      MatPaginatorModule,
      Ng2SearchPipeModule,
      DialogeditModule,
      MatPaginatorModule,
      UiSwitchModule,
      NgxPaginationModule,
      UserdNavbarModule,
      NgxLoadingModule.forRoot({})

 
        
        
        //SideModule
    ],
    declarations: [
      ListsecretaryComponent
    ]
    ,exports: [ListsecretaryComponent],
})
export class ListsecretaryModule { }


