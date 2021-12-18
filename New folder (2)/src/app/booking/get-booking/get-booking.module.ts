import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { GetBookingComponent } from './get-booking.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
        GetBookingComponent
    ]
    ,exports: [GetBookingComponent],
})
export class GetBookinModule { }
