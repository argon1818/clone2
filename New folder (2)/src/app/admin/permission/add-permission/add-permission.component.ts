import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/service/permission.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
  //******************** The code was cleared and test ********************

export class AddPermissionComponent implements OnInit {
  //--------------------------------------------------------- variable---------------------------------------------------

  public loading = false;
  submitted = false;
  data:any;
  error1:any;
  agent_id:any;
  error2:any;
  AddpermissionForm = new FormGroup({
  }); 
  config: INgxLoadingConfig = {};

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }

  //----------------------------------------------- constructor & ngononit---------------------------------------------------

  
  constructor(private formBuilder: FormBuilder,private router:Router, private PermissionService:PermissionService, private toastr: ToastrService) { 
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddpermissionForm= this.formBuilder.group({
      permission_name :['',[Validators.required]],
      description :  ['',[Validators.required]]   

   });
  }
  
 ngOnInit() { }

  //----------------------------------------------- functions---------------------------------------------------

  
 get f() { return this.AddpermissionForm.controls; }

 addpermissions(){
  this.submitted=true;  

  if(this.AddpermissionForm.invalid){
    return
  }
  this.loading = true;
  
  let data={
    "permission_name": this.AddpermissionForm.value.permission_name,
    "description": this.AddpermissionForm.value.description,
  }

  this.PermissionService.Addpermission(data).subscribe((res:any)=>{
    this.setTimeoutInner();
    this.error1=0;
    this.error2=0;
    if (res.status==401){
      this.loading = false;   
      this.error1=1
    } 
    else if (res.status==400){
      this.loading = false;
      this.error2=1
    }     
    else if (res.status==200){
      this.loading = false;
      this.error1=200;
      this.submitted=false;
      this.router.navigate(['/dashboard1/managepermission'])
      this.toastr.success('عملیات با موفقیت انجام شد', '');

    }
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    this.loading = false;
  });
} 

ReturnTo(){
  this.router.navigate(['/dashboard1/managepermission'])
}

}