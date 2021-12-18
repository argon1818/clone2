import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AssignRoleService } from 'src/app/service/assignrole.service';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

  //************* The code was cleared and test *******************

@Component({
  selector: 'app-add-assignrole',
  templateUrl: './add-assignrole.component.html',
  styleUrls: ['./add-assignrole.component.scss']
})
export class AddAssignroleComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};
  errorMsg:any;
  submitted = false;
  selectedRoleIds: [] | undefined;
  selectedUserIds: [] | undefined;
  data:any;
  errorMsg2:any;
  errorMsg1:any;
  phone_num:any;
  error1:any;
  role_list:any;
  selectedUser: any;
  list_user:any;
  users2:any;
  item:any;
  user_id:any;

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }


  AddAssignRoleForm = new FormGroup({
  }); 


  get f() { return this.AddAssignRoleForm.controls; }
  
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router,private AssignRoleService:AssignRoleService,private UserService:UserService, private RoleService:RoleService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddAssignRoleForm= this.formBuilder.group({
      permission_name : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required])     
  });
}  

  ngOnInit() {
  this.RoleService.Listrole().subscribe((res:any)=>{
    if(res.status==200){
    this.role_list=res.data.Roles_List;
    let l=this.role_list.length
    }
  }) 
  this.route.params.subscribe(params => {
    console.log(params['id'])
    if(params['id']){
      this.UserService.GetUserInfo(params['id']).subscribe((res:any)=>{
        this.item=res.data;
        console.log(this.item)
        this.phone_num=this.item.phone_num;
        this.user_id=this.item.id;

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

    if (!this.selectedRoleIds) {
      this.errorMsg1 =1;
      return;
    }


    let data={
      "roles":[],
      "user_id":this.user_id
    }

    for (let i = 0; i < this.selectedRoleIds.length; i++){
      data.roles.push( this.selectedRoleIds[i])
    } 
    
    this.AssignRoleService.AddAssignRole(data).subscribe((res:any)=>{
      this.error1=0;
      console.log(res)  
      if (res.status==405){
        this.error1=1
      } 
      
      else if (res.status==201){
        this.submitted=false;
        this.selectedRoleIds=[]
        this.selectedUserIds=[]
        this.router.navigate(['dashboard1/manageassignrole']) 

        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;  
}
ReturnTo(){
  this.router.navigate(['/dashboard1/manageassignrole'])
}

}

