import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { AddRoleComponent } from './add-role.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NgMultiSelectDropDownModule,
        NgSelectModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

    ],
    declarations: [
      AddRoleComponent
    ]
    ,exports: [AddRoleComponent],
})
export class AddRoleModule { }
