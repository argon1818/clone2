import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPermissionComponent } from './add-permission.component';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
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
      AddPermissionComponent
    ]
    ,exports: [AddPermissionComponent],
})
export class AddPermissionModule { }
