
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterComponent } from "./register.component";
import { Sidebar1Module } from "src/app/menu/sidebar1/sidebar1.module";
import { NavbarModule } from "src/app/menu/navbar/navbar.module";
import { FooterModule } from "src/app/menu/footer/footer/footer.module";
import { EditUserModule } from "../edit-user/edit-user.module";
import { ProfileModule } from "../profile/profile.module";
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
        ProfileModule,
        NgxLoadingModule.forRoot({})

        
    ]

    ,declarations:[
        RegisterComponent
        
    ],exports: [RegisterComponent],
})
export class RegisterModule{
    

}