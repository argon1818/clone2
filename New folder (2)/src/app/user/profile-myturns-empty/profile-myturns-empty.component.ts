import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-myturns-empty',
  templateUrl: './profile-myturns-empty.component.html',
  styleUrls: ['./profile-myturns-empty.component.scss']
})
export class ProfileMyturnsEmptyComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }

  navigatetobooking(){
    this.router.navigate(['/'])


  }

}
