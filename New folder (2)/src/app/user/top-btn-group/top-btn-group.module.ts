import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TopBtnGroupComponent } from "./top-btn-group.component";
import { NgxLoadingModule } from "ngx-loading";




@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxLoadingModule.forRoot({})

    ]
    ,declarations:[
      TopBtnGroupComponent,
    ],
 exports:[TopBtnGroupComponent]
})

export class TopBtnGroupModule{

}
