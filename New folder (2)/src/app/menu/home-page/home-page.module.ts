import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomePageComponent } from "./home-page.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from '../footer/footer/footer.module';
import { NavbarMainModule } from '../navbar-main/navbar-main.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FooterModule,
    NavbarMainModule,
    MatFormFieldModule,
    MatSelectModule
  ]
  ,declarations:[
    HomePageComponent,
  ],
  exports:[HomePageComponent]
})

export class HomePageModule{

}
