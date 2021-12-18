import {Component, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as Mapboxgl  from 'mapbox-gl';
import mapboxgl from "mapbox-gl";


@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss']
})

export class MapTestComponent implements OnInit {

  map: Mapboxgl.Map | undefined;

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Mapboxgl.Map({
      container: 'map-mapbox', // container ID
      style: 'mapbox://styles/argon18/ckwt0lkj41v1m15t7vtc52uph', // style URL
      center: [59.5840084,36.3023878 ], // LNT LAT
      zoom: 16 // starting zoom
    });
    this.testMarker(59.5840084,36.3023878);
  }



  testMarker(lng:number , lat:number){
    if (this.map instanceof mapboxgl.Map) {
      const marker = new Mapboxgl.Marker({
        draggable: true
      })
        .setLngLat([lng, lat])
        .addTo(this.map);

      marker.on('drag',()=>{
        console.log(marker.getLngLat())
      })

    }

  }


}
