import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {
  selected1 = 'option2';
  selected2 = 'option3';
  constructor() { }

  ngOnInit(): void {

  }
}
