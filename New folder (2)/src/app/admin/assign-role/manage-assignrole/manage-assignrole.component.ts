import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AssignRoleService } from 'src/app/service/assignrole.service';
import { UserService } from 'src/app/service/user.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

//************* The code was cleared and test *******************

@Component({
  selector: 'app-manage-assignrole',
  templateUrl: './manage-assignrole.component.html',
  styleUrls: ['./manage-assignrole.component.scss']
})
export class ManageAssignroleComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};
  users:any;
  secretary_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  filterTerm: string="";
  configtable: any;
  collection = { count: 60, data: [] };
  len:any;
  len2:any;
  rol:any;
  rol_user:string[]=[]
  rol_user2:any[]=[]
  loginPart1=true;
  loginPart2=false;
  dtOptions: any = {};


  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }

  constructor(private UserService:UserService,private AssignRoleService:AssignRoleService,private toastr: ToastrService, private router: Router,  public dialog: MatDialog ){     
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.configtable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }  

    
       
ngOnInit(){
  this.loading = true

setTimeout(()=>{  
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}, 1);

this.UserService.Listuser().subscribe((res:any)=>{

  if(res.status==200){
    this.loading = false
    this.users=res.data.users
    this.len=(this.users.length)

    for (let i = 0; i <this.len ; i++) {
      this.len2=0
      this.rol_user=[]
      this.rol=this.users[i].roles
      this.len2=this.rol.length
      let k=0
      for(let j=0;j<this.len2;j++){
        this.rol_user[k]=this.rol[j].roles.role_name
        k=k+1
      }
      this.rol_user2[i]=this.rol_user
      this.users[i].roles=this.rol_user
    }
  }

},(error:any)=> {
  this.loading = false
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;
}


Deleteassignrole(item:any){
  var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");
  this.loading = true


    if ( delBtn == true ) {
      this.AssignRoleService.DeleteAssignrole(item).subscribe((res:any)=>{

        if (res.status==200){
          this.loading = false
          window.location.reload();      
          this.toastr.success('عملیات با موفقیت انجام شد', '');  
        }    

      },(error:any)=> {
        this.loading = false
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;
    } 
    if ( delBtn == false ) {
      this.loading = false
    }   
  
}


Editassignrole(item:any){
  this.loading = true
  this.AssignRoleService.GetAssignroleInfo(item).subscribe((res:any)=>{
    if (res.status==200){
      this.loading = false
      this.router.navigate(["/dashboard1/editassignrole/"+item])
    } 
  },(error:any)=> {
    this.loading = false
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;  
  }


  Addassignrole(item:any){
    this.loading = true

    this.AssignRoleService.GetAssignroleInfo(item).subscribe((res:any)=>{
      if (res.status==200){
        this.loading = false
        this.toastr.error('به این کاربر قبلا نقشی اختصاص داده شده است', ''); 
      } 
      else   
      this.router.navigate(["/dashboard1/addassignrole/"+item])
 
    },(error:any)=> {
      this.loading = false
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
      
    }

}








//   permission:any;
//   permission_name: any;
//   description: any;
//   permission_name2: any;
//   description2: any;
//   x:any;
//   agent_id:any;
//   filterTerm: string="";
//   config: any;
//   collection = { count: 60, data: [] };

//   constructor(private AssignRoleService:AssignRoleService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
//     this.config = {
//       itemsPerPage: 5,
//       currentPage: 1,
//       totalItems: this.collection.count
//     };
//   }  
//      loginPart1=true;
//      loginPart2=false;    
       
//   dtOptions: any = {};
//   ngOnInit(){
//   setTimeout(()=>{  
//     this.dtOptions = {
//         pagingType: 'full_numbers',
//         pageLength: 2,
//       lengthMenu : [5, 10, 25],
//         processing: true
//       };
//   }, 1);
 

//   console.log("-------ddddddddddddddddddd------")
// this.AssignRoleService.ListAssignrole().subscribe((res:any)=>{
//   // console.log("-------ddddddddddddddddddd------")

//   this.permission=res.data.Assign_Roles_List

// })
// }

// //=============================================================================================================================
// //                                                       functions
// //=============================================================================================================================

// EditAssignrole(item:any){
//   this.router.navigate(["/editassignrole/"+item])  
// }

// DeleteAssignrole(item:any){
//   this.x=JSON.parse(localStorage.getItem('user')|| '{}')
//   this.agent_id=this.x.user_id;
//   let data={
//     "permission_id": item,
//     "agent_id":this.agent_id
//   }

//   var delBtn = confirm(" از پاک شدن مجوز مطمئن هستید؟");

//     if ( delBtn == true ) {
//       this.AssignRoleService.DeleteAssignrole(item).subscribe((res:any)=>{
//         console.log(res)
//         window.location.reload();
      
//       }) 
//     }   
//     this.toastr.success('عملیات با موفقیت انجام شد', '');   
// }

// }





