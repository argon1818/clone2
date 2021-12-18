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
  selector: 'app-select-turn',
  templateUrl: './select-turn.component.html',
  styleUrls: ['./select-turn.component.scss']
})
export class SelectTurnComponent implements OnInit {

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
  doctor_id:any;
  user_id:any;

  constructor(private BookingService:BookingService, private router: Router,private route:ActivatedRoute,  public dialog: MatDialog,private toastr: ToastrService ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configTable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
  doctor_name:any;  
  doctor_surname:any;
       
  dtOptions: any = {};
  ngOnInit(){

    this.route.params.subscribe(params => {
      this.user_id=params['id'];
      this.doctor_id=params['id1'];
    });   

    this.BookingService.GetDoctorInfo(this.doctor_id).subscribe((res:any)=>{
      this.doctor_name=res.data.doctors.user.name;
      this.doctor_surname=res.data.doctors.user.surname;
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;


    this.BookingService.GetDoctorTurn(this.doctor_id).subscribe((res:any)=>{
      this.list_turn=res.data.doctor_turn_List
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
}



RegisterTurn(item:any){
  this.loading = true;

  let data={
    "user_id":this.user_id,
    "office_doctor_id": this.doctor_id,
    "turn_id":item,
    "tracking_num": 1,  
    }
    var delBtn = confirm("از دریافت نوبت مطمئن هستید؟");

    if ( delBtn == true ) {

    this.BookingService.Addbooking(data).subscribe((res:any)=>{
      this.setTimeoutInner();

      
      if (res.status==200){
        this.toastr.success('نوبت ثبت شد', '');  
        window.location.reload();

      }      
      if (res.status==405){
        this.loading = false;

        this.toastr.error('کاربر برای این پزشک نوبت فعال دارد', '');           
      }  
      if (res.status==406){
        this.loading = false;

        this.toastr.error('نوبت خالی وجود ندارد', '');           
      }  
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ; 
  }
    
    // this.router.navigate(["/dashboard1/editturn/"+item])  
}



ReturnToback(){
  this.router.navigate(['/dashboard1/managebooking'])

} 

}





