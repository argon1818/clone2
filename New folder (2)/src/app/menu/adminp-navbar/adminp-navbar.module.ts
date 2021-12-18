import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminpNavbarComponent } from "./adminp-navbar.component";
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SidbaradminModule,
    NavbarModule,
    NgxLoadingModule,
  ]
  ,declarations:[
    AdminpNavbarComponent,
  ],
  exports:[AdminpNavbarComponent]
})

export class AdminpNavbarModule{

}
