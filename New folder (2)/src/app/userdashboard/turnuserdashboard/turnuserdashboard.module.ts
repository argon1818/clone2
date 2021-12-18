import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from 'src/app/menu/footer/footer/footer.module';
import { LeftRegisterModule } from 'src/app/menu/left-register/left-register.module';
import { ProfileHealthcalenderModule } from 'src/app/user/profile-healthcalender/profile-healthcalender.module';
import { SidbarIconModule } from 'src/app/menu/sidbar-icon/sidbar-icon.module';
import { NavbarMainModule } from 'src/app/menu/navbar-main/navbar-main.module';
import { TurnuserdashboardComponent } from './turnuserdashboard.component';
import { ProfileMyturnsModule } from 'src/app/user/profile-myturns/profile-myturns.module';
import { ProfileModule } from 'src/app/user/profile/profile.module';
import { ProfileMyturnsEmptyModule } from 'src/app/user/profile-myturns-empty/profile-myturns-empty.module';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FooterModule,
        ProfileHealthcalenderModule,
        SidbarIconModule,
        NavbarMainModule,
        ProfileModule,
        LeftRegisterModule,
        ProfileMyturnsModule,
        ProfileMyturnsEmptyModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

        

      
        
        //SideModule
    ],
    declarations: [
        TurnuserdashboardComponent
    ]
    ,exports: [TurnuserdashboardComponent],
})
export class TurnuserdashboardModule { }
