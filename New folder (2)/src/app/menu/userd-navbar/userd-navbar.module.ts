import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserdNavbarComponent } from "./userd-navbar.component";




@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,declarations:[
    UserdNavbarComponent,
  ],
  exports:[UserdNavbarComponent]
})

export class UserdNavbarModule{

}
