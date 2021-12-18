import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-left-register',
  templateUrl: './left-register.component.html',
  styleUrls: ['./left-register.component.scss']
})
export class LeftRegisterComponent implements OnInit {

  TheNumberOfUserDoctors:number = 3;

  url1:string = "../../../assets/images/user-pages/mydoctors/Ellipse 565.png";
  url2:string = "../../../assets/images/user-pages/mydoctors/Ellipse 564.png";
  url3:string = "../../../assets/images/user-pages/mydoctors/Ellipse 563.png";
  url4:string = "../../../assets/images/user-pages/mydoctors/Ellipse 562.png";
  url5:string = "../../../assets/images/user-pages/mydoctors/Ellipse 561.png";

  Doctor1:boolean = true;
  Doctor2:boolean = false;
  Doctor3:boolean = true;
  Doctor4:boolean = true;
  Doctor5:boolean = false;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Logout(){
    if(localStorage.getItem("access_token")){
      localStorage.removeItem("access_token")
      localStorage.removeItem("user")
    }
    this.router.navigate([''])

  }

}
