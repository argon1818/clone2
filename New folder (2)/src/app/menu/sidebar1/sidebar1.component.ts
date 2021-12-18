// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { initialConfig } from 'ngx-mask';
// import * as $ from 'jquery';

declare var jQuery: any;
declare var $: any;

declare const test: any;

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.scss']
})
export class Sidebar1Component implements OnInit {

 

  url : any;
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {

      var reader = new FileReader();


      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result;
        console.log(this.url)
      }
    }
  }




  constructor(private router: Router, private route: ActivatedRoute) {

    




   }

  ngOnInit(): void { 

    (function ($) {
      $(document).ready(function () {
        setTimeout(function () { test(); });
      });
      $(window).on('resize', function () {
        setTimeout(function () { test(); }, 500);
      });
      $(".sidbar1-toggler").click(function () {
        setTimeout(function () { test(); });
      });

    })(jQuery);
  }
//===========================sidbar user=============================
  navigateToDashboard(){
this.select=1;

  }
  navigateToRelation(){
    this.select=2;
    }

  navigateToNobat(){
    this.select=3;

    // this.router.navigate(["/dashboard/myturn"])
    // .then(() => {
    //   window.location.reload();
    // });

  }


  navigateToTaghvim(){
    this.select=4;

    // this.router.navigate(["/dashboard/userdhealthcalender"])
    // .then(() => {
    //   window.location.reload();
    // });

  }

  navigateToSalamatyaran(){
    this.select=5;


  }
  navigateToparvande(){
    this.select=6;


  }

select:any=1;
  test(){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.select=1;
  }

  test2(){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.select=2;
  }

}
















  // // Variable to store shortLink from api response
  // shortLink: string = "";
  // loading: boolean = false; // Flag variable
  // selectedfile = null; // Variable to store file

  // // Inject service
  // constructor(private fileUploadService: FileUploadService) { }
  // onSelectFile(event: any) {
  //   this.selectedfile = event.target.files[0];
  //   this.loading = !this.loading;
  //   console.log(this.selectedfile);
  //   this.fileUploadService.upload(this.selectedfile).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //         // Short link via api response
  //         this.shortLink = event.link;

  //         this.loading = false; // Flag variable
  //       }
  //     }
  //   );
  // }






  // navigateToDashboard() {
  //   this.router.navigate(['register'])
  // }


