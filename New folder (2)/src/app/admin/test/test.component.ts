import { Component, OnInit } from '@angular/core';

import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  //...
  public loading = false;

  constructor() { }

  ngOnInit() { }
  config: INgxLoadingConfig = {};

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1500);
  }




 

  onThreeBounce() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.setTimeoutInner();
  }
}
