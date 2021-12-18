import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NavbarSpecialComponent } from "./navbar-special.component";
import { ResultSearchModule } from "src/app/doctor/result-search/result-search.module";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ResultSearchModule
    ]
    ,declarations:[
        NavbarSpecialComponent,
    ],
 exports:[NavbarSpecialComponent] 
})

export class NavbarSpecialModule{

}