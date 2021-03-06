import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RoleService } from 'src/app/service/role.service';
import { ToastrService } from 'ngx-toastr';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
//************* The code was cleared and test *******************

@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.scss']
})
export class ListroleComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};
  roles:any;
  permission_name: any;
  description: any;
  permission_name2: any;
  description2: any;
  filterTerm: string="";
  dtOptions: any = {};
  loginPart1=true;
  loginPart2=false;
  page=1;
  len:any;
  len2:any;
  permis_user:any[]=[]
  permish:any;

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }
 
  constructor(private toastr: ToastrService,private RoleService:RoleService, private router: Router,  public dialog: MatDialog ){     
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
  }   

       
  ngOnInit(){
    setTimeout(()=>{  
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
        lengthMenu : [5, 10, 25],
          processing: true
        };
    }, 100);

  this.RoleService.Listrole().subscribe((res:any)=>{
    this.loading=true

    if(res.status==200){
      this.loading=false
      this.roles=res.data
      this.len=(this.roles.length)

      for (let i = 0; i <this.len ; i++) {
        this.len2=0
        this.permis_user=[]
        this.permish=this.roles[i].permissions
        this.len2=this.permish.length
        let k=0
        for(let j=0;j<this.len2;j++){
          this.permis_user[k]=this.permish[j].permissions.permission_name
          k=k+1

        }
        this.roles[i].permissions=this.permis_user
      }
    }
    else if(res.status==402){
      this.loading = false;
      this.toastr.error("???????? ???? ???????? ?????? ???????? ??????", '??????!');
    }  


  },(error:any)=> {
    this.loading=false
    this.toastr.error("???? ?????? ???????? ???????? ???????? ???? ?????? ????????", '??????!');
  }) ; 

  }


Deleterols(item:any){
  var delBtn = confirm(" ???? ?????? ?????? ?????? ?????????? ????????????");
  this.loading=true
    if ( delBtn == true ) {
      this.RoleService.DeleteRole(item).subscribe((res:any)=>{
        if(res.status==406){
          this.loading=false
          this.toastr.error('?????? ?????? ???????????? ?????? ??????????', ''); 
      }
      else if(res.status==200){
        this.loading=false
        window.location.reload();   
        this.toastr.success('???????????? ???? ???????????? ?????????? ????', '');   

      }
      },(error:any)=> {
        this.loading=false
        this.toastr.error("???? ?????? ???????? ???????? ???????? ???? ?????? ????????", '??????!');
      }) ;
    }  
    if ( delBtn == false ) {
      this.loading=false
    }
}

  EditRole(item:any)
  {
    this.router.navigate(["dashboard1/editrole/"+item])    
  }
  Navigateaddrole(){
    this.router.navigate(["dashboard1/addrole"])
  }
}

