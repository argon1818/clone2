
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';

import {BrowserModule } from '@angular/platform-browser';
import { AddTurnComponent } from './add-turn.component';
import { DialogeditModule } from 'src/app/admin/dialog/dialogedit/dialogedit.module';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxLoadingModule } from 'ngx-loading';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
    imports: [
        CommonModule,
        NgPersianDatepickerModule,
        ReactiveFormsModule,
        SidbaradminModule,
        FormsModule,
        NgSelectModule,
        NgxMaskModule.forRoot(maskConfig),
        MatTabsModule,
      BrowserModule,     
      MatDatepickerModule,
      MatFormFieldModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatNativeDateModule,
      UserdNavbarModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      DataTablesModule,
      MatPaginatorModule,
      UiSwitchModule,
      NgxLoadingModule.forRoot({})


      //SideModule
    ],
    declarations: [
        AddTurnComponent
        
    ]
    ,exports: [AddTurnComponent],
})

// export class PickerdateModule { }
export class ADDTurnModule { }
