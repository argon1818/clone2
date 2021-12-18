import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminModule } from 'src/app/menu/sidbaradmin/sidbaradmin.module';
import { MapTestComponent } from './map-test.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidbaradminModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_z5jFw_Xaofu3OxhjiOuNrbmhtVISllQ'
    }),
    HttpClientModule,

  ],
  declarations: [
    MapTestComponent
  ]
  ,exports: [MapTestComponent],
})
export class MapTestModule { }
