import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

declare const test: any;
@Component({
  selector: 'app-sidbar3',
  templateUrl: './sidbar3.component.html',
  styleUrls: ['./sidbar3.component.scss']
})
export class Sidbar3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {



      $(document).ready(function(){
        setTimeout(function(){ test(); });
      });
      $(window).on('resize', function(){
        setTimeout(function(){ test(); }, 500);
      });
      $(".navbar-toggler").click(function(){
        setTimeout(function(){ test(); });
      });




    })(jQuery);

  }

}
