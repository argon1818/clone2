import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Sidbar2Component } from "./sidbar2.component";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
    ,declarations:[
        Sidbar2Component,
    ],
 exports:[Sidbar2Component] 
})

export class sidbar2Module{

}