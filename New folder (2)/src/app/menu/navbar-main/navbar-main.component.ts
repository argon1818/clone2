import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    console.log("===========")
    this.router.navigate(["/register"])

  }
  pagemain(){
    this.router.navigate(["/"])

  }

  NavigateTosearchdoctor(){
    
    this.router.navigate(["/"])

  }

}
