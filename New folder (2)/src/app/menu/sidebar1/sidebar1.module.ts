import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Sidebar1Component } from "./sidebar1.component";
import {HttpClientModule} from '@angular/common/http';
import { SidbaradminModule } from "../sidbaradmin/sidbaradmin.module";
import { ADDTurnModule } from "src/app/booking/turn/add-turn/add-turn.module";
import { SidbarIconModule } from "../sidbar-icon/sidbar-icon.module";
import { UserDashboardModule } from "src/app/user/user-dashboard/user-dashboard.module";
import { AddPermissionComponent } from "src/app/admin/permission/add-permission/add-permission.component";
import { AddPermissionModule } from "src/app/admin/permission/add-permission/add-permission.module";
import { ListUserModule } from "src/app/user/list-user/list-user.module";
import { FooterModule } from "../footer/footer/footer.module";
import { CalenderhealthModule } from "src/app/userdashboard/calenderhealth/calenderhealth.module";
import { TurnuserdashboardModule } from "src/app/userdashboard/turnuserdashboard/turnuserdashboard.module";
import { CommunicatinUserdashboardModule } from "src/app/userdashboard/communicatin-userdashboard/communicatin-userdashboard.module";
import { HealpersuserdashboardModule } from "src/app/userdashboard/healpersuserdashboard/healpersuserdashboard.module";
import { ProfileUserdashboardModule } from "src/app/userdashboard/profile-userdashboard/profile-userdashboard.module";
import { ProfileMyhealthRecordModule } from "src/app/user/profile-myhealth-record/profile-myhealth-record.module";
import { MedicalrecordUserdashboardModule } from "src/app/userdashboard/medicalrecord-userdashboard/medicalrecord-userdashboard.module";
import { NavbarMainModule } from "src/app/menu/navbar-main/navbar-main.module";







@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    SidbarIconModule,
    FooterModule,
    CalenderhealthModule,
    TurnuserdashboardModule,
    CommunicatinUserdashboardModule,
    HealpersuserdashboardModule,
    ProfileUserdashboardModule,
    MedicalrecordUserdashboardModule,
    NavbarMainModule,
    
    // ca
    ]
  ,declarations:[
    Sidebar1Component,
  ],
  exports:[Sidebar1Component]
})

export class Sidebar1Module{

}
