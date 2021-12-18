
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { sidbar2Module } from "src/app/menu/sidbar2/sidbar2.module";
import { NavbarModule } from "src/app/menu/navbar/navbar.module";
import { NavbarMainModule } from "src/app/menu/navbar-main/navbar-main.module";

import { SidbarIconModule } from "src/app/menu/sidbar-icon/sidbar-icon.module";
import { NavbarSpecialModule } from "src/app/menu/navbar-special/navbar-special.module";
import { MainComponent } from "./main.component";
import { FooterModule } from "src/app/menu/footer/footer/footer.module";
import { NgxLoadingModule } from "ngx-loading";



@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule ,
        FooterModule,
        NavbarMainModule,
        SidbarIconModule,
        NavbarSpecialModule,
        SidbarIconModule,
        FooterModule,
        NgxLoadingModule.forRoot({})


        
    ]

    ,declarations:[
        MainComponent,
    ]
})
export class MainModule{

}