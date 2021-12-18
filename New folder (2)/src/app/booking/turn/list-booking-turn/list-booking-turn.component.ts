import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { BookingService } from 'src/app/service/booking.service';
import { data } from 'jquery';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-list-booking-turn',
  templateUrl: './list-booking-turn.component.html',
  styleUrls: ['./list-booking-turn.component.scss']
})
export class ListBookingTurnComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  list_turn:any;

  permission:any;
  permission_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  x:any;
  agent_id:any;
  filterTerm: string="";
  configTable: any;
  collection = { count: 60, data: [] };

  constructor(private BookingService:BookingService, private router: Router,private route:ActivatedRoute,  public dialog: MatDialog,private toastr: ToastrService ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configTable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
     loginPart1=true;
     loginPart2=false;    
     doctor_name:any;
     doctor_surname:any;
     Dr_id:any;
       
  dtOptions: any = {};
  ngOnInit(){
    let data;

    this.route.params.subscribe(params => {
      data=params['id'];
      this.Dr_id=params['id2'];



    });   

    this.BookingService.GetDoctorInfo(this.Dr_id).subscribe((res:any)=>{
      this.doctor_name=res.data.doctors.user.name;
      this.doctor_surname=res.data.doctors.user.surname;
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;



    this.BookingService.GetListBookingATurn(data).subscribe((res:any)=>{
      this.list_turn=res.data.doctor_List
      console.log(this.list_turn)
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
}

//=============================================================================================================================
//                                                       functions
//=============================================================================================================================

// DeletePermissions(item:any){
//   this.x=JSON.parse(localStorage.getItem('user')|| '{}')
//   this.agent_id=this.x.user_id;
//   let data={
//     "permission_id": item,
//     "agent_id":this.agent_id
//   }

//   var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

//     if ( delBtn == true ) {
//       this.PermissionService.DeletePermission(item).subscribe((res:any)=>{
//         window.location.reload();
      
//       }) 
//     }   
    
//     this.toastr.success('عملیات با موفقیت انجام شد', '');   
// }

EditTurn(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/editturn/"+item])  
}


DeleteTurn(item:any,item2:any){
  console.log(item,item2)

  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

    if ( delBtn == true ) {
      this.BookingService.Deletebooking(item,item2).subscribe((res:any)=>{
        window.location.reload();
        this.toastr.success('عملیات با موفقیت انجام شد', '');   

      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }   
    
}
 
// pageChanged(event:any){
//   this.config.currentPage = event;
// }

// Navigateaddpermission(){
//   this.router.navigate(["/dashboard1/addpermission"])
// }


ReturnToback(){
  this.router.navigate(['/dashboard1/listturn/'+this.Dr_id])

}
ListBooking(item:any){
  this.router.navigate(["/dashboard1/listbookingdoctor/"+item]) 

}
}





