import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer.component";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
    ,declarations:[
        FooterComponent,
    ],
 exports:[FooterComponent] 
})

export class FooterModule{

}