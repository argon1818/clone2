import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LeftRegisterComponent } from "./left-register.component";




@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,declarations:[
    LeftRegisterComponent,
  ],
  exports:[LeftRegisterComponent]
})

export class LeftRegisterModule{

}
