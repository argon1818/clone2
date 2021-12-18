import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { AddSecretaryComponent } from 'src/app/secretary/add-secretary/add-secretary.component';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';
import { EditInsuranceComponent } from './edit-insurance.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,SidbaradminModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

    ],
    declarations: [
        EditInsuranceComponent
    ]
    ,exports: [EditInsuranceComponent],
})
export class EditInsuranceModule { }
