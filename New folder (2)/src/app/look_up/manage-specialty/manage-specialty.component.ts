import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SecretaryService } from 'src/app/service/secretary.service';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-specialty',
  templateUrl: './manage-specialty.component.html',
  styleUrls: ['./manage-specialty.component.scss']
})
export class ManageSpecialtyComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  secretary:any;
  secretary_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  filterTerm: string="";
  configTable: any;
  collection = { count: 60, data: [] };

data:any;
manageForm2 = new FormGroup({

}); 

  constructor(private toastr: ToastrService,private lookupService:lookupService, private router: Router,  public dialog: MatDialog ){   
    
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
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}, 1);
console.log("------fffffffffffffffffffffffff-----------")
this.loading = true;

this.lookupService.ListSpecialty().subscribe((res:any)=>{
  this.setTimeoutInner();
if (res.status==200){
  this.loading = false;
  this.data=res.data
  console.log(res.data)

}


},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
}


Deletespecialty(item:any){
  this.loading = true;


  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");
  console.log("tttttttttttttttttttt")
  console.log(item)

    if ( delBtn == true ) {
      this.lookupService.DeleteSpecialty(item).subscribe((res:any)=>{
        this.setTimeoutInner();
        if (res.status==200){
          this.loading = false;
          
        console.log(res)
        window.location.reload();

        }

      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 
    }   


  //=======================
  
  
}


EditSpecialty(item:any){
  console.log(item)
this.router.navigate(["/editspecialty/"+item])
  
  }
  addspecialty(){
    this.router.navigate(["dashboard1/addspecialty"])

  }


 
  Navigatemanaaddspecial(){
    this.router.navigate(["/dashboard1/addspecialty"])
  }


}






