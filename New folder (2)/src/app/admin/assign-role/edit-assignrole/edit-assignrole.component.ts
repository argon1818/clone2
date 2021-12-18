import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AssignRoleService } from 'src/app/service/assignrole.service';
import { PermissionService } from 'src/app/service/permission.service';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

  //************* The code was cleared and test *******************

@Component({
  selector: 'app-edit-assignrole',
  templateUrl: './edit-assignrole.component.html',
  styleUrls: ['./edit-assignrole.component.scss']
})
export class EditAssignroleComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  errorMsg:any;
  submitted = false;
  roles:any;
  selectedRoleIds: number[] =[];
  selectedUserIds: [] | undefined;
  role_old: number[] =[];
  data:any;
  errorMsg2:any;
  errorMsg1:any;
  phone_num:any;
  editItem:any;
  error1:any;
  role_list:any;
  selectedUser: any;
  list_user:any;
  users2:any;
  user_id:any;

  AddAssignRoleForm = new FormGroup({

  }); 
  get f() { return this.AddAssignRoleForm.controls; }
  
  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private AssignRoleService:AssignRoleService,private UserService:UserService, private RoleService:RoleService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddAssignRoleForm= this.formBuilder.group({
      role : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required])     
  });
}  
  ngOnInit() {
  this.RoleService.Listrole().subscribe((res:any)=>{
    if(res.status==200){
    this.role_list=res.data;
    let l=this.role_list.length}
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;


  this.route.params.subscribe(params => {
    this.user_id=params['id']
    if(params['id']){
      console.log("//////////////////////////////////////////////")

      this.UserService.GetUserInfo(params['id']).subscribe((res:any)=>{
        this.editItem=res.data.roles;
        console.log(this.editItem)
        this.roles=this.role_list;
        this.phone_num=res.data.phone_num;
        console.log(this.phone_num)
        let temp=[];
        for (let i = 0; i< this.editItem.length; i++){
          console.log(this.editItem[i].roles.id)
          temp.push(this.editItem[i].roles.id)
        } 
        console.log("--------------------------------------------")

        console.log(temp)

        this.selectedRoleIds=temp;
        console.log("//////////////////////////////////////////////")
        console.log(this.selectedRoleIds)
        this.role_old=this.selectedRoleIds
        this.AddAssignRoleForm.patchValue({    
          role: temp, 
          
        });
      })
    }else{
    }
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;  

  }

  AddAssignRole(){
    this.submitted=true;
    this.errorMsg1=0
    this.errorMsg2=0    

    let data={
      "roles":this.AddAssignRoleForm.value.role,
      "roles_befor":this.role_old,
      "user_id":this.user_id
    }

     
    this.AssignRoleService.EditAssignrole(data).subscribe((res:any)=>{
      this.error1=0;
      console.log(res)  
      if (res.status==405){
        this.error1=1
      } 
      
      if (res.status==200){
        this.submitted=false;     
        this.router.navigate(['dashboard1/manageassignrole']) 
        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
      if (res.status==407){
        this.submitted=false;     
        this.router.navigate(['dashboard1/manageassignrole']) 
        this.toastr.error('این نقش قابلیت حذف ندارد. ابتدا از صفحه مدیریت پزشک، کاربر حذف شود', '');
      } 
      if (res.status==408){
        this.submitted=false;     
        this.router.navigate(['dashboard1/manageassignrole']) 
        this.toastr.error('این نقش قابلیت حذف ندارد. ابتدا از صفحه مدیریت منشی کاربر حذف شود', '');
      } 
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
}
ReturnTo(){
  this.router.navigate(['/dashboard1/manageassignrole'])
}

}

