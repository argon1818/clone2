import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { EditBookingComponent } from './edit-booking.component';
import { NgxLoadingModule } from 'ngx-loading';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

const maskConfig: Partial<IConfig> = {
    validation: false,
  };
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        FormsModule,
        NgSelectModule,
        NgxMaskModule.forRoot(maskConfig),
        NgxLoadingModule.forRoot({})



        //SideModule
    ],
    declarations: [
        EditBookingComponent
    ]
    ,exports: [EditBookingComponent],
})
export class EditBookingModule { }
