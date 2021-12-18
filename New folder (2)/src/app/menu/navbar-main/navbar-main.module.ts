import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NavbarMainComponent } from "./navbar-main.component";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
    ,declarations:[
        NavbarMainComponent,
    ],
 exports:[NavbarMainComponent] 
})

export class NavbarMainModule{

}