import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';

import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule,IConfig } from 'ngx-mask';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { Editturn2Component } from './editturn2.component';
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
    DataTablesModule,
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
    NgxLoadingModule.forRoot({})


    ],
    declarations: [
        Editturn2Component
    ]
    ,exports: [Editturn2Component],
})
export class Editturn2Module { }
