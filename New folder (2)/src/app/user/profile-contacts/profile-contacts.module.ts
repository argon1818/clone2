import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileContactsComponent } from './profile-contacts.component';
//import {NgxMaskModule} from "ngx-mask";
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidbaradminModule,
    NavbarModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    NgxLoadingModule.forRoot({})



    //SideModule
  ],
  declarations: [
    ProfileContactsComponent
  ]
  ,exports: [ProfileContactsComponent],
})
export class ProfileContactsModule { }
