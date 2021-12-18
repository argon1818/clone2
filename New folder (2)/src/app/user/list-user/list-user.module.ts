import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ListUserComponent } from './list-user.component';
import { FooterModule } from 'src/app/menu/footer/footer/footer.module';
import { UserdNavbarModule } from '../../menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
import { DialogeditModule } from 'src/app/admin/dialog/dialogedit/dialogedit.module';

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
      FooterModule,
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
      ListUserComponent
    ]
    ,exports: [ListUserComponent],
})
export class ListUserModule { }


