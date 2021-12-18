import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/service/permission.service';
import { RoleService } from 'src/app/service/role.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

//************* The code was cleared and test *******************

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit { 
  public loading = false;
  config: INgxLoadingConfig = {};   
  errorMsg:any;
  permissionselect:any;
  submitted = false;
  selectedRoleIds: [] | undefined;
  data:any;
  error1:any;
  listPermish:any;
  selectedUser: any;
  error2:any;

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }


  AddroleForm = new FormGroup({
  }); 

  get f() { return this.AddroleForm.controls; }
  
  constructor(private formBuilder: FormBuilder,private router:Router, private PermissionService:PermissionService, private RoleService:RoleService, private toastr: ToastrService) { 
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.AddroleForm= this.formBuilder.group({
      role_name : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),

  });
} 

  ngOnInit() {
    this.PermissionService.Listpermission().subscribe((res:any)=>{
      if(res.status==200){
        this.listPermish=res.data;
      }   
  
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  }

  ReturnTo(){
    this.router.navigate(['/dashboard1/managerole'])
  }

  addroles(){
    this.submitted=true;

    this.errorMsg=0
    if (!this.selectedRoleIds) {
      this.errorMsg =1;
      return;
    }

    if(this.AddroleForm.invalid){
      return
    }

    this.loading=true

    let data={
      "role_name": this.AddroleForm.value.role_name,
      "description": this.AddroleForm.value.description,
      "permissions":[]
    }

    for (let i = 0; i < this.selectedRoleIds.length; i++){
      data.permissions.push( this.selectedRoleIds[i])
      this.selectedRoleIds[i]      
    } 
    this.RoleService.Addrole(data).subscribe((res:any)=>{
      this.error1=0;
      this.error2=0;
      if (res.status==401){
        this.loading=false
        this.error1=1
      } 
      else if (res.status==400){
        this.loading=false
        this.error2=1
      } 
      else if (res.status==404){
        this.loading=false
        this.error2=1
        this.toastr.success('داده مورد نظر پیدا نشد', '');
      } 
      
      else if (res.status==200){
        this.loading=false
        this.error1=200;
        this.submitted=false;
        this.router.navigate(['/dashboard1/managerole'])

        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
    },(error:any)=> {
      this.loading=false
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
}

}

