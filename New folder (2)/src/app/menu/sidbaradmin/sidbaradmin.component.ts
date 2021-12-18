import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import * as $ from 'jquery';
import { lookupService } from 'src/app/service/lookup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidbaradmin',
  templateUrl: './sidbaradmin.component.html',
  styleUrls: ['./sidbaradmin.component.scss']
})
export class SidbaradminComponent implements OnInit {
  
  constructor(private toastr: ToastrService,private route: ActivatedRoute, private router: Router,private lookupService:lookupService) { }

  ngOnInit(): void {
   $(document).ready(function(){
     //jquery for toggle sub menus
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });

     //jquery for expand and collapse the sidebar
     $('.menu-btn').click(function(){
       $('.side-bar').addClass('active');
       $('.menu-btn').css("visibility", "hidden");
     });

     $('.close-btn').click(function(){
       $('.side-bar').removeClass('active');
       $('.menu-btn').css("visibility", "visible");
     });
   }); 

  }


  Navigatemanagepermission(){
    this.router.navigate(["/dashboard1/managepermission"])

  }
  Navigatemanagerole(){
    this.router.navigate(["/dashboard1/managerole"])

  }
  Navigatemanageassignrole(){
    this.router.navigate(["/dashboard1/manageassignrole"])

  }
  Navigatemanageuser(){
    this.router.navigate(["/dashboard1/manageuser"])

  }
  Navigatemanageoffice(){
    this.router.navigate(["/dashboard1/manageoffice"])

  }
  Navigatemanagedoctor(){
    this.router.navigate(["/dashboard1/managedoctor"])

  }

  Navigatemanagesecretary(){
    this.router.navigate(["/dashboard1/managesecretary"])

  }

  Navigatemanagespecialty(){
    this.router.navigate(["/dashboard1/managespecialty"])

  }


  Navigatemanagesubspecialty(){
    this.router.navigate(["/dashboard1/managesubspecialty"])

  }

  Navigatemanagebooking(){
    this.router.navigate(["/dashboard1/managebooking"])

  }

  Navigatemanagetypevisit(){
    this.router.navigate(["/dashboard1/managetypevisit"])

  }
  Navigatemain(){
    this.router.navigate(["/dashboard1/home"])

  }
  Navigatemanageturn(){
    this.router.navigate(["/dashboard1/manageturn"])

  }

  Navigatemanageinsurance(){
    this.router.navigate(["/dashboard1/manageinsurance"])
  }

  Navigateaddprovince(){
    this.lookupService.Addprovince(0).subscribe((res:any)=>{
      if (res.data==1){
        this.toastr.error('لیست شهر و استان ها قبلا در جدول وارد شده است', '');      }
      if (res.data==0){
        this.toastr.success('لیست شهر و استان ها وارد شد', ''); 
      }

    })   

  }


  
}