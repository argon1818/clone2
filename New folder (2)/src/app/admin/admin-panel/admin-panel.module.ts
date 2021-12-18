import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminPanelComponent } from "./admin-panel.component";
import { ChartsModule } from 'ng2-charts';
import { AdminpNavbarModule } from '../../menu/adminp-navbar/adminp-navbar.module';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { ChartModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  imports:[
    ChartModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    AdminpNavbarModule,
    SidbaradminModule
  ]
  ,declarations:[
    AdminPanelComponent,
  ],
  exports:[AdminPanelComponent]
})

export class AdminPanelModule{

}
