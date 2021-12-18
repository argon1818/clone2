import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { TestComponent } from './test.component';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {MatTabsModule} from '@angular/material/tabs';
import { DialogeditModule } from '../dialog/dialogedit/dialogedit.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';

//import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import {BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
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
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxLoadingModule.forRoot({})


      //SideModule
    ],
    declarations: [
        TestComponent,
        
    ]
    ,exports: [TestComponent],
})
export class TestModule { }
