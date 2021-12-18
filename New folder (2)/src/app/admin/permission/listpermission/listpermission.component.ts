import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

  //************* The code was cleared and test *******************


@Component({
  selector: 'app-listpermission',
  templateUrl: './listpermission.component.html',
  styleUrls: ['./listpermission.component.scss']
})
export class ListpermissionComponent implements OnInit {

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
  collection = { count: 60, data: [] };
  loginPart1=true;
  loginPart2=false;  
  dtOptions: any = {};




  constructor(private PermissionService:PermissionService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.configTable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
  
       
  ngOnInit(){

  setTimeout(()=>{  
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2,
      lengthMenu : [5, 10, 25],
        processing: true
      };
  }, 1);


this.PermissionService.Listpermission().subscribe((res:any)=>{
  this.loading = true;
  this.permission=res.data

  if(res.status==200){
    this.loading = false;
  }
  else if(res.status==402){
    this.loading = false;
    this.toastr.error("مجوزی تا کنون ثبت نشده است", 'خطا!');
  }
},(error:any)=> {
  this.loading = false;
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;
}

//---------------------------------function-----------------------------------
DeletePermissions(item:any){

  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");
  this.loading = true;

    if ( delBtn == true ) {
      this.PermissionService.DeletePermission(item).subscribe((res:any)=>{
        if(res.status==200){
          this.loading = false;
          window.location.reload();
          this.toastr.success('عملیات با موفقیت انجام شد', '');   

        }
        if(res.status==404){
          this.loading = false;
          this.toastr.error("این مجوز پیدا نشد", 'خطا!');
        }
      
      },(error:any)=> {
        this.loading = false;
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }     
    if ( delBtn == false ) {
      this.loading = false;
    }
}

EditPermission(item:any){
  this.router.navigate(["/editpermission/"+item])  
}
 
Navigateaddpermission(){
  this.router.navigate(["/dashboard1/addpermission"])
}
}





