import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-manage-insurance',
  templateUrl: './manage-insurance.component.html',
  styleUrls: ['./manage-insurance.component.scss']
})
export class ManageInsuranceComponent implements OnInit {

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
  collection = { count: 60, data: [] };
  result:any;
  constructor(private lookupService:lookupService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configtable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  
     loginPart1=true;
     loginPart2=false;    
       
  dtOptions: any = {};
  ngOnInit(){
    this.loading = true;

  setTimeout(()=>{  
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2,
      lengthMenu : [5, 10, 25],
        processing: true
      };
  }, 1);

this.lookupService.Listinsurance().subscribe((res:any)=>{
  this.setTimeoutInner();
  console.log(res.data)
if(res.status==200){
  this.loading = false;
  this.result=res.data
  console.log(this.result)

}


},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
}

//=============================================================================================================================
//                                                       functions
//=============================================================================================================================

DeleteTypevisit(item:any){
  this.loading = true;




  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

    if ( delBtn == true ) {
      this.lookupService.DeleteInsurance(item).subscribe((res:any)=>{

        this.setTimeoutInner();
        if(res.status==200){
          this.loading = false;
          window.location.reload();


        }

      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;
    }   
    this.toastr.success('عملیات با موفقیت انجام شد', '');   
}

EditVisit(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/editinsurance/"+item])  
}
 
pageChanged(event:any){
  this.config.currentPage = event;
}
Navigateaddtypevisit(){
  this.router.navigate(["/dashboard1/addinsurance"])
}
}


