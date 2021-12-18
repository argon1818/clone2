import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditAssignroleComponent } from './edit-assignrole.component';
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';

//import { SideModule } from '../side/side.component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        NgMultiSelectDropDownModule,
        NgSelectModule,
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})

        //SideModule
    ],
    declarations: [
        EditAssignroleComponent
    ]
    ,exports: [EditAssignroleComponent],
})
export class EditAssignroleModule { }
