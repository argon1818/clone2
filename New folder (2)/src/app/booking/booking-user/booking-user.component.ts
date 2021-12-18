import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { BookingService } from 'src/app/service/booking.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.scss']
})
export class BookingUserComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }


  permission:any;
  permission_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  x:any;
  agent_id:any;
  filterTerm: string="";
  configTable: any;
  booking:any;
  collection = { count: 60, data: [] };

  constructor(private DoctorService:DoctorService,private BookingService:BookingService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configTable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
     loginPart1=true;
     loginPart2=false;    
       
  dtOptions: any = {};
  ngOnInit(){
  setTimeout(()=>{  
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2,
      lengthMenu : [5, 10, 25],
        processing: true
      };
  }, 1);
  console.log("===============================================")
  this.loading = true;
        

this.BookingService.GetBookinglist().subscribe((res:any)=>{
  this.setTimeoutInner();
  if(res.status==200){
    this.loading = false;
    console.log("==================11====11=========================")
    this.booking=res.data.booking_list
    console.log(this.booking)

  }



},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;
}

//=============================================================================================================================
//                                                       functions
//=============================================================================================================================

Deleteturn(user:any,turn:any){
  this.loading = true;

   var delBtn = confirm(" از پاک شدن نوبت مطمئن هستید؟");

    if ( delBtn == true ) {
      this.BookingService.Deletebooking(user,turn).subscribe((res:any)=>{
        this.setTimeoutInner();

        console.log(res.status)
    
        if (res.status==200){
          this.loading = false;

          window.location.reload();
          this.toastr.success('نوبت با موفقیت حذف شد', '');   

          
        }
        // if (res.status==203){
        //   this.toastr.error('برای این پزشک نوبتی ثبت نشده است', '');            
        // }
      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;
    }   
    

  }

  Addturn(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/addturn/"+item])  
}
ListTurn(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/listturn/"+item])  
}

DeleteTurn(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/listdeletedturn/"+item])  
}

Navigatemanageaddbooking(){
  this.router.navigate(["/dashboard1/addbooking/"])  

}
 
// pageChanged(event:any){
//   this.config.currentPage = event;
// }

// Navigatemanageadddoctor(){
//   this.router.navigate(["/dashboard1/adddoctor"])
// }
}







