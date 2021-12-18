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
  selector: 'app-manage-turn',
  templateUrl: './manage-turn.component.html',
  styleUrls: ['./manage-turn.component.scss']
})
export class ManageTurnComponent implements OnInit {

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
  configtable: any;
  doctor:any;
  collection = { count: 60, data: [] };

  constructor(private DoctorService:DoctorService,private BookingService:BookingService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
   
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configtable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
  
       
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
  this.loading = true;


this.DoctorService.ListDoctorOffice().subscribe((res:any)=>{
  this.setTimeoutInner();
if(res.status==200){
  this.loading = false;
  this.doctor=res.data.result
  console.log(this.doctor)

}
 

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
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

}






