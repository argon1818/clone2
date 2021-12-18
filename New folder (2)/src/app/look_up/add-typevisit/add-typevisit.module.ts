import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { AddTypevisitComponent } from './add-typevisit.component';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

    ],
    declarations: [
        AddTypevisitComponent
    ]
    ,exports: [AddTypevisitComponent],
})
export class AddTypevisitModule { }
