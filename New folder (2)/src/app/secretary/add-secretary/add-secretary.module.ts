import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { NavbarModule } from 'src/app/menu/navbar/navbar.module';
import { AddSecretaryComponent } from './add-secretary.component';
//import { SideModule } from '../side/side.component.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { UserdNavbarModule } from 'src/app/menu/userd-navbar/userd-navbar.module';
import { NgxLoadingModule } from 'ngx-loading';

const maskConfig: Partial<IConfig> = {
    validation: false,
  };
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SidbaradminModule,
        NavbarModule,
        FormsModule,
        NgxMaskModule.forRoot(maskConfig),
        UserdNavbarModule,
        NgxLoadingModule.forRoot({})


        //SideModule
    ],
    declarations: [
      AddSecretaryComponent
    ]
    ,exports: [AddSecretaryComponent],
})
export class AddSecretaryModule { }
