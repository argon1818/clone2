import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicatin-userdashboard',
  templateUrl: './communicatin-userdashboard.component.html',
  styleUrls: ['./communicatin-userdashboard.component.scss']
})
export class CommunicatinUserdashboardComponent implements OnInit {

  Count = [];
  mot:number = 4;
  isFill:boolean = true;

  counter(i: number) {
    return new Array(i);
  }

  constructor() { this.Count.length = this.mot;}

  ngOnInit(): void {
  }

}

