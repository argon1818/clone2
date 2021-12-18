
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NavbarComponent } from "./navbar.component";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,        
    ]

    ,declarations:[
        NavbarComponent,
    ]
   ,exports: [NavbarComponent],
})
export class NavbarModule{

}