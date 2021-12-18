import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OfficeService } from 'src/app/service/office.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-manage-office',
  templateUrl: './manage-office.component.html',
  styleUrls: ['./manage-office.component.scss']
})
export class ManageOfficeComponent implements OnInit {

  public loading = false;

  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  office:any;
  permission_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  x:any;
  agent_id:any;
  filterTerm: string="";
  configTable: any;
  collection = { count: 60, data: [] };

  constructor(private OfficeService:OfficeService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
   
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
    this.loading = true;

  setTimeout(()=>{  
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2,
      lengthMenu : [5, 10, 25],
        processing: true
      };
  }, 1);

this.OfficeService.Listoffice().subscribe((res:any)=>{
  this.setTimeoutInner();
  if (res.status==200){
    this.loading = false;
    this.office=res.data
    console.log(this.office)

  }



},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;
}

//=============================================================================================================================
//                                                       functions
//=============================================================================================================================

DeleteOffices(item:any){
  this.loading = true;



  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

    if ( delBtn == true ) {
      this.OfficeService.DeleteOffice(item).subscribe((res:any)=>{
        this.setTimeoutInner();
        if(res.status==200){
          this.loading = false;
          console.log(res)
          window.location.reload();
          this.toastr.success('عملیات با موفقیت انجام شد', '');   

        }


      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }   
}

EditOffices(item:any){
  console.log(item)
  this.router.navigate(["/dashboard1/editoffice/"+item])  
}
 

AddOffice(){
  this.router.navigate(["/dashboard1/addoffice"])

} 
pageChanged(event:any){
  this.config.currentPage = event;
}
}





