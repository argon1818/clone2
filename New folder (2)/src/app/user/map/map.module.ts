import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidbaradminModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDueaT3wuyX-isVDmGQ-FLRc2rcLGI0N-Y'
    // }),
    // HttpClientModule,

  ],
  declarations: [
    MapComponent
  ]
  ,exports: [MapComponent],
})
export class MapModule { }
