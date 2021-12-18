import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from 'src/app/menu/footer/footer/footer.module';
import { LeftRegisterModule } from 'src/app/menu/left-register/left-register.module';
import { ProfileHealthcalenderModule } from 'src/app/user/profile-healthcalender/profile-healthcalender.module';
import { SidbarIconModule } from 'src/app/menu/sidbar-icon/sidbar-icon.module';
import { NavbarMainModule } from 'src/app/menu/navbar-main/navbar-main.module';
import { ProfileCommunicationModule } from 'src/app/user/profile-communication/profile-communication.module';
import { ProfileModule } from 'src/app/user/profile/profile.module';
import { HealpersuserdashboardComponent } from './healpersuserdashboard.component';
import { ProfileMyhelpersModule } from 'src/app/user/profile-myhelpers/profile-myhelpers.module';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FooterModule,
        LeftRegisterModule,
        ProfileHealthcalenderModule,
        SidbarIconModule,
        NavbarMainModule,
        ProfileModule,
        ProfileCommunicationModule,
        ProfileMyhelpersModule,
        NgxLoadingModule.forRoot({})

        

      
        
        //SideModule
    ],
    declarations: [
        HealpersuserdashboardComponent
    ]
    ,exports: [HealpersuserdashboardComponent],
})
export class HealpersuserdashboardModule { }
