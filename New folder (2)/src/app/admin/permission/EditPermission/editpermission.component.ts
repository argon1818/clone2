import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { Router,ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/service/permission.service';

@Component({
  selector: 'app-editpermission',
  templateUrl: './editpermission.component.html',
  styleUrls: ['./editpermission.component.scss']
})

//************* The code was cleared and test *******************

export class EditpermissionComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};
  submitted = false;
  editItem:any;
  data:any;
  error1:any;
  error2:any;
  permission_id2:any;
  EditpermissionForm = new FormGroup({
  }); 

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  constructor( private formBuilder: FormBuilder,private router:Router, private PermissionService:PermissionService,private route:ActivatedRoute,private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.EditpermissionForm= this.formBuilder.group({
      permission_name2 : new FormControl('',[Validators.required]),
      description2 : new FormControl('',[Validators.required])
      
  });
}

ngOnInit() {
  this.loading = true;
  this.route.params.subscribe(params => {
    if(params['id']){
      this.PermissionService.GetPermissionInfo(params['id']).subscribe((res:any)=>{
        if (res.status==200){
          this.loading = false;
          this.editItem=res.data;
          this.permission_id2=this.editItem.id;
          this.EditpermissionForm.patchValue({
            permission_name2:this.editItem.permission_name,
            description2 :this.editItem.description,
          });
        }
        else{
          this.loading = false;
        }
      })
    }
  
  },(error:any)=> {
    this.loading = false;
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ; 

}


get f() { return this.EditpermissionForm.controls; }
  
  editFunc(){
    this.submitted=true;

    if(this.EditpermissionForm.invalid){
      return
    }
    this.loading = true;

    let data={
      "permission_name": this.EditpermissionForm.value. permission_name2,
      "description":this.EditpermissionForm.value.description2,
      "permission_id":this.permission_id2
    }

    this.PermissionService.EditPermission(data).subscribe((res:any)=>{
      this.error1=0;
      this.error2=0;
      if (res.status==401){
        this.loading = false;
        this.submitted=true
        this.error1=1
      } 
      else if (res.status==400){
        this.loading = false;
        this.error2=1
      } 
       
      else if (res.status==200){
        this.loading = false;
        this.error1=201;
        this.submitted=false;  
        this.router.navigate(['dashboard1/managepermission']) 
        this.toastr.success('عملیات با موفقیت انجام شد', '');

      } 
    },(error:any)=> {
      this.loading = false;
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  }

  ReturnTo(){
    this.router.navigate(['/dashboard1/managepermission'])
  } 
  
  }

  


