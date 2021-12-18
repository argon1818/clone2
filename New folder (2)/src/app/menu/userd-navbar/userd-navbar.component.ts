import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userd-navbar',
  templateUrl: './userd-navbar.component.html',
  styleUrls: ['./userd-navbar.component.scss']
})
export class UserdNavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // login(){
  //   console.log("===========")
  //   this.router.navigate(["/register"])

  // }

  navigateTomain(){

    this.router.navigate(["/dashboard1/home"])

  }

  navigateTodoctor(){

    this.router.navigate(["/dashboard1/managedoctor"])

  }

  navigateTooffice(){

    this.router.navigate(["/dashboard1/manageoffice"])

  }

  navigateTosecretary(){

    this.router.navigate(["/dashboard1/managesecretary"])

  }

  navigateTobooking(){

    this.router.navigate(["/dashboard1/managebooking"])

  }

  navigateTomanagebooking(){

    this.router.navigate(["/dashboard1/manageturn"])

  }

  Logout(){
    if(localStorage.getItem("access_token")){
      localStorage.removeItem("access_token")
      localStorage.removeItem("user")
    }
    this.router.navigate([''])  

  }

}
