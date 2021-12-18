import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calenderhealth',
  templateUrl: './calenderhealth.component.html',
  styleUrls: ['./calenderhealth.component.scss']
})
export class CalenderhealthComponent implements OnInit {

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


