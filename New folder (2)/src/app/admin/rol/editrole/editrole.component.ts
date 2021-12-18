import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/service/permission.service';
import { RoleService } from 'src/app/service/role.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

//************* The code was cleared and test *******************

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.scss']
})
export class EditroleComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};
  errorMsg:any=0;
  roleid:number=0;
  submitted = false;
  editItem:any;
  selectedRoleIds: number[] =[];
  error1:any;
  error2:any;
  listPermish:any;
  selectedUser: any;
  itemperm:any;
  permission_old:any;
  EditRoleForm = new FormGroup({
  }); 

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }


  get f(): { [key: string]: AbstractControl } {
    return this.EditRoleForm.controls;
  }  


  constructor( private formBuilder: FormBuilder,private PermissionService:PermissionService,private router:Router, private RoleService:RoleService,private route:ActivatedRoute,private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.EditRoleForm= this.formBuilder.group({
      role_name2 : new FormControl('',[Validators.required]),
      description2 : new FormControl('',[Validators.required])
  });
}  


  ngOnInit() {
    this.PermissionService.Listpermission().subscribe((res:any)=>{
      if(res.status==200){      
      this.listPermish=res.data;
      let l=this.listPermish.length
      }
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
  


    this.route.params.subscribe(params => {
      this.roleid= (params['id'])
      if(params['id']){
        this.RoleService.GetRoleInfo(params['id']).subscribe((res:any)=>{

          if(res.status==200){
            this.editItem=res.data;
            this.EditRoleForm.patchValue({
              role_name2:this.editItem.role_name,
              description2 :this.editItem.description,
              role_id2:this.editItem.role_id,
            });
            let temp=[];
            for (let i = 0; i< this.editItem.permissions.length; i++){
              temp.push(this.editItem.permissions[i].permissions)
            } 
            let temp2=[];
            for (let j =0; j< temp.length; j++ ) {
              temp2.push(temp[j].id)
            }
            this.selectedRoleIds=temp2;
            this.permission_old=this.selectedRoleIds
          }
          else if(res.status==404){
            this.toastr.error("برای این نقش اطلاعاتی در دسترس نیست", 'خطا!');
          }        
        })
      }
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 

  }
  

  editRole(){
    this.submitted = true;
    if (this.selectedRoleIds?.length == 0) {
      this.errorMsg = 1;
      return;
    }    
    if(this.EditRoleForm.invalid){
      return
    }

    this.loading=true
    let data={
      "role_name": this.EditRoleForm.value. role_name2,
      "description":this.EditRoleForm.value.description2,
      "permissions":this.EditRoleForm.value.description2,
      "role_id":this.roleid,
      "permission_old":this.permission_old
    }

    let a=this.selectedRoleIds?.length
    let temp4=[]    
    for (let i = 0; i < this.selectedRoleIds.length; i++){
      temp4.push( this.selectedRoleIds[i])      
    } 
    data.permissions=temp4;

    this.RoleService.EditRole(data).subscribe((res:any)=>{
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
      
      else if (res.status==200){
        this.loading=false
        this.error1=200;
        this.submitted=false;
        this.router.navigate(['dashboard1/managerole'])
        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
      else if (res.status==404){
        this.loading=false
        this.router.navigate(['dashboard1/managerole'])
        this.toastr.error('این نقش پیدا نشد', '');
      } 
 
    },(error:any)=> {
      this.loading=false
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  }
  ReturnTo(){
    this.router.navigate(['/dashboard1/managerole'])
  }
  }



