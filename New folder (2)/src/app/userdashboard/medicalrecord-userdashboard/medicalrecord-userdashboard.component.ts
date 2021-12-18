import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicalrecord-userdashboard',
  templateUrl: './medicalrecord-userdashboard.component.html',
  styleUrls: ['./medicalrecord-userdashboard.component.scss']
})
export class MedicalrecordUserdashboardComponent implements OnInit {

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
