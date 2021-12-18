import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SidbarIconComponent } from "./sidbar-icon.component";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
    ,declarations:[
        SidbarIconComponent,
    ],
 exports:[SidbarIconComponent] 
})

export class SidbarIconModule{

}