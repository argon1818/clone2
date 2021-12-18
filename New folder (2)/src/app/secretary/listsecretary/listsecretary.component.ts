import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SecretaryService } from 'src/app/service/secretary.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-listsecretary',
  templateUrl: './listsecretary.component.html',
  styleUrls: ['./listsecretary.component.scss']
})
export class ListsecretaryComponent implements OnInit {

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




  constructor(private toastr: ToastrService,private SecretaryService:SecretaryService, private router: Router,  public dialog: MatDialog ){     
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
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}, 1);
console.log("-----------------")

this.SecretaryService.Listsecretary().subscribe((res:any)=>{

  this.setTimeoutInner();
  if(res.status==200){
    this.loading = false;
    this.secretary=res.data.secretary_List
    console.log(this.secretary)

  }



},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
}


DeleteSecretarys(item:any){
  this.loading = true;

  console.log("ssssssssssssssssssssssssssssssssss")

  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

    if ( delBtn == true ) {
      this.SecretaryService.DeleteSecretary(item).subscribe((res:any)=>{
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


  
  
}


EditSecretarys(item:any){
this.router.navigate(["/dashboard1/editsecretary/"+item])
  
  }


 
  AddSecretarys(){
    this.router.navigate(["/dashboard1/addsecretary"])

  } 


}





