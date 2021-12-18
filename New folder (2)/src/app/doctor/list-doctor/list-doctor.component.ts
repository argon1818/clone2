import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {

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
  doctor:any;
  collection = { count: 60, data: [] };

  constructor(private DoctorService:DoctorService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
    this.loading = true;

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

this.DoctorService.ListDoctor().subscribe((res:any)=>{
  this.setTimeoutInner();
  if(res.status==200){
    this.loading = false;
    console.log("==================11=============================")
    this.doctor=res.data.doctor_List
    console.log(this.doctor)

  }



},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
}

//=============================================================================================================================
//                                                       functions
//=============================================================================================================================

DeletDoctors(item:any){
  this.loading = true;

  console.log("ssssssssssssssssssssssssssssssssss")

  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

    if ( delBtn == true ) {
      this.DoctorService.DeleteDoctor(item).subscribe((res:any)=>{
        this.setTimeoutInner();
        if(res.status==200){
          this.loading = false;
          console.log(res)
          window.location.reload();

        }


      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }   


  
  
}

EditDoctors(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/editdoctor/"+item])  
}
 
pageChanged(event:any){
  this.config.currentPage = event;
}

Navigatemanageadddoctor(){
  this.router.navigate(["/dashboard1/adddoctor"])
}
}






