
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { RegisterComponent } from "../../user/register/register.component;
//import { Sidbar1Module } from "src/app/menu/sidbar1/sidbar1.module";
import { Sidebar1Module } from "src/app/menu/sidebar1/sidebar1.module";

import { NavbarModule } from "src/app/menu/navbar/navbar.module";
import { FooterModule } from "src/app/menu/footer/footer/footer.module";
import { EditUserModule } from "src/app/user/edit-user/edit-user.module";

import { LeftRegisterModule } from "../../menu/left-register/left-register.module";
import { NavbarMainModule } from "../../menu/navbar-main/navbar-main.module";
import { SidbarIconModule } from "src/app/menu/sidbar-icon/sidbar-icon.module";
import {UserDashboardComponent} from "./user-dashboard.component";
import { ProfileModule } from "../../user/profile/profile.module";
import { NgxLoadingModule } from "ngx-loading";


// import {NavComponent} from '../nav/nav.component';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FooterModule,

    Sidebar1Module,
    NavbarModule,
    EditUserModule,
    NavbarMainModule,
    SidbarIconModule,
    ProfileModule,
    LeftRegisterModule,
    NgxLoadingModule.forRoot({})


  ]

  ,declarations:[
    UserDashboardComponent

  ]
  ,exports: [UserDashboardComponent],

})
export class UserDashboardModule{

}
