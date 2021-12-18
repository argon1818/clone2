
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormatTimePipe, LoginComponent } from "./login.component";
import { sidbar2Module } from "src/app/menu/sidbar2/sidbar2.module";
import { NavbarModule } from "src/app/menu/navbar/navbar.module";
import { NavbarMainModule } from "src/app/menu/navbar-main/navbar-main.module";

import { SidbarIconModule } from "src/app/menu/sidbar-icon/sidbar-icon.module";
import { NavbarSpecialModule } from "src/app/menu/navbar-special/navbar-special.module";
import { FooterModule } from "src/app/menu/footer/footer/footer.module";

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxLoadingModule } from "ngx-loading";

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule ,
        NavbarModule,
        sidbar2Module,
        FooterModule,
        NavbarMainModule,
        SidbarIconModule,
        NavbarSpecialModule,
        NgxMaskModule.forRoot(maskConfig),
        NgxLoadingModule.forRoot({})


        
    ]

    ,declarations:[
        LoginComponent,
        FormatTimePipe,
    ]
})
export class LoginModule{

}