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
  selector: 'app-list-turn',
  templateUrl: './list-turn.component.html',
  styleUrls: ['./list-turn.component.scss']
})
export class ListTurnComponent implements OnInit {

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
     itemDr:any;
  dtOptions: any = {};
  ngOnInit(){
    let data;
    this.loading = true;


    this.route.params.subscribe(params => {
      data=params['id'];
      this.itemDr=data;

    });   
    
    this.BookingService.GetDoctorInfo(data).subscribe((res:any)=>{
      this.setTimeoutInner();
      if(res.status==200){
        this.loading = false;
        this.doctor_name=res.data.doctors.user.name;
        this.doctor_surname=res.data.doctors.user.surname;

      }

   
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;


    this.BookingService.GetDoctorTurn(data).subscribe((res:any)=>{
      this.setTimeoutInner();
      if(res.status==200){
        this.loading = false;

      this.list_turn=res.data.doctor_turn_List
      console.log(this.list_turn)
      }
    
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
  this.router.navigate(["/dashboard1/editturn/"+item+"/"+this.itemDr])  
}


DeleteTurn(item:any){
  this.loading = true;


  var delBtn = confirm(" از پاک شدن زمان ویزیت مطمئن هستید؟");

    if ( delBtn == true ) {
      this.BookingService.Delete_a_Turn(item).subscribe((res:any)=>{
        this.setTimeoutInner();
if(res.status==200){
  this.loading = false;
  window.location.reload();
        this.toastr.success('عملیات با موفقیت انجام شد', ''); 

}
                
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }   
    
}
 

ReturnToback(){
  this.router.navigate(['/dashboard1/manageturn'])

}
ListBooking(item:any){
  this.router.navigate(["/dashboard1/listbookingdoctor/"+item+"/"+this.itemDr]) 

}
}





