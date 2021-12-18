import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { DialogeditComponent } from './dialogedit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { SideModule } from '../side/side.component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
        //SideModule
    ],
    declarations: [
      DialogeditComponent
    ]
    ,exports: [DialogeditComponent],
})
export class DialogeditModule { }
