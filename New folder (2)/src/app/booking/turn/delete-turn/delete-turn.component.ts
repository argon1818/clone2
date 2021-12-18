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
  selector: 'app-delete-turn',
  templateUrl: './delete-turn.component.html',
  styleUrls: ['./delete-turn.component.scss']
})
export class DeleteTurnComponent implements OnInit {

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
  doctor_office:any;
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
 
       
  dtOptions: any = {};
  doctor_name:any;
  doctor_surname:any;
  ngOnInit(){

    this.route.params.subscribe(params => {
      this.doctor_office=params['id'];

    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;   
    
    this.BookingService.GetDoctorInfo(this.doctor_office).subscribe((res:any)=>{
      this.doctor_name=res.data.doctors.user.name;
      this.doctor_surname=res.data.doctors.user.surname;
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;


    this.BookingService.GetTurnDeleted(this.doctor_office).subscribe((res:any)=>{
      this.list_turn=res.data.doctor_List
      console.log(this.list_turn)
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
}



EditTurn(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/editturn/"+item])  
}


DeleteTurn(item:any,item2:any){
  this.loading = true;


  var delBtn = confirm("مبلغ پرداختی کاربر عودت داده شد؟");

    if ( delBtn == true ) {
      this.BookingService.DeleteCancel(item,item2).subscribe((res:any)=>{
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
 
// pageChanged(event:any){
//   this.config.currentPage = event;
// }

// Navigateaddpermission(){
//   this.router.navigate(["/dashboard1/addpermission"])
// }

ReturnToback(){
  this.router.navigate(['/dashboard1/manageturn'])

}
}





