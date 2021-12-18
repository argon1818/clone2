import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ResultSearchComponent } from './result-search.component';
import { NgxLoadingModule } from 'ngx-loading';
//import { SideModule } from '../side/side.component.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        FormsModule,
        NgSelectModule,
        NgxLoadingModule.forRoot({})



        //SideModule
    ],
    declarations: [
        ResultSearchComponent
    ]
    ,exports: [ResultSearchComponent],
})
export class ResultSearchModule { }
