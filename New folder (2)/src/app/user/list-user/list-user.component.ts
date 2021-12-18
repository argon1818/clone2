import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SecretaryService } from 'src/app/service/secretary.service';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

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
  a:any;
  role2:any;
  len:any;
  rol_user:string[]=[]

  constructor(private UserService:UserService,private DoctorService:DoctorService,private SecretaryService:SecretaryService,private toastr: ToastrService, private router: Router,  public dialog: MatDialog ){     
    
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

this.loading = true;


this.UserService.Listuser().subscribe((res:any)=>{
  this.setTimeoutInner();
  if(res.status==200)
  {
    this.loading = false;



  this.secretary=res.data.users
  this.len=(this.secretary.length)
  this.rol_user=[]
  for (let i = 0; i <this.len ; i++) {
    console.log("8888888888888888888888888888888888888")
    // console.log(this.secretary[0].roles[0].roles.role_name)
    console.log(this.secretary[i].rol=this.secretary[i].roles[0].roles.role_name)
    // this.secretary[i].rol=this.secretary[i].roles[0].roles.role_name
    // this.rol_user[i]=this.secretary[i].roles[0].role_name
  }
}
},(error:any)=> {
  this.loading = false;

  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 

console.log(this.secretary)

}


DeleteUsers(item:any){
  this.loading = true;


  this.UserService.GetUserInfo(item).subscribe((res:any)=>{
    this.setTimeoutInner();



    this.a=res.data['roles']
    
    if (this.a[0].roles.role_name=="پزشک"){
      var delBtn = confirm(" از پاک شدن کاربر مطمئن هستید؟");
      if ( delBtn == true ) {
        this.DoctorService.DeleteDoctor(item).subscribe((res:any)=>{
          this.setTimeoutInner();
          if(res.status==200){
            this.loading = false;
          window.location.reload();
          this.toastr.success('عملیات با موفقیت انجام شد', '');    
          }  
        }) 
      }
      if ( delBtn == false ){
        this.loading = false;
      }    
    }
    else if (this.a[0].roles.role_name=="منشی"){
      var delBtn = confirm(" از پاک شدن کاربر مطمئن هستید؟");
      if ( delBtn == true ) {
        this.SecretaryService.DeleteSecretary(item).subscribe((res:any)=>{
          this.setTimeoutInner();

          if(res.status==200){
            this.loading = false;
            window.location.reload();
            this.toastr.success('عملیات با موفقیت انجام شد', '');   

          }
   
        }) 
    
      }  
      if ( delBtn == false ){
        this.loading = false;
      } 
    }
    else{
      var delBtn = confirm(" از پاک شدن کاربر مطمئن هستید؟");
      if ( delBtn == true ) {
        this.UserService.DeleteUser(item).subscribe((res:any)=>{
          this.setTimeoutInner();
          if(res.status==200){
            this.loading = false;

            window.location.reload();
            this.toastr.success('عملیات با موفقیت انجام شد', '');     

          }

 
        }) 
      }  
    
      if ( delBtn == false ){
        this.loading = false;
      } 
    }  
    },(error:any)=> {
      this.loading = false;

      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 

 
  
}

editItem:any;
rol:any;
Edituser(item:any){
  this.UserService.GetUserInfo(item).subscribe((res:any)=>{
    this.a=res.data['roles']
    console.log("ddddddddddddddddddd")
    console.log(this.a[0].roles.role_name)
    if (this.a[0].roles.role_name=="پزشک"){
      this.router.navigate(["/dashboard1/editdoctor/"+item])
    }
    else if (this.a[0].roles.role_name=="منشی"){
      this.router.navigate(["/dashboard1/editsecretary/"+item])
    }
    else{
      this.router.navigate(["/dashboard1/edituser/"+item])

    }
 
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  
  }



 
      Navigateadduser(){
        this.router.navigate(["/dashboard1/adduser"])

      }


}






