import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healpersuserdashboard',
  templateUrl: './healpersuserdashboard.component.html',
  styleUrls: ['./healpersuserdashboard.component.scss']
})
export class HealpersuserdashboardComponent implements OnInit {

  Count = [];
  mot:number = 4;
  isFill:boolean = true;

  counter(i: number) {
    return new Array(i);
  }


  constructor() { this.Count.length = this.mot; //you can give any number
    }

  ngOnInit(): void {
  }

}
