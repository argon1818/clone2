import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditDoctorComponent } from './edit-doctor.component';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';

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
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})



        //SideModule
    ],
    declarations: [
        EditDoctorComponent
    ]
    ,exports: [EditDoctorComponent],
})
export class EditDoctorModule { }
