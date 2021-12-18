import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';
import { PermissionService } from 'src/app/service/permission.service';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }


  errorMsg:any;
  permissionselect:any;
  submitted = false;
  selecteduserIds:[] | undefined;
  selectedDoctorIds:[] | undefined;

  data:any;
  error1:any;
  listPermish:any;
  selectedUser: any;
  error2:any;
  doctor:any;
  users:any;
  AddbookingForm = new FormGroup({

  }); 
  
  constructor(private formBuilder: FormBuilder,private router:Router, private UserService:UserService, private DoctorService:DoctorService, private RoleService:RoleService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddbookingForm= this.formBuilder.group({
  });
}  
  ngOnInit() {
    this.UserService.Listuser().subscribe((res:any)=>{
      this.users=res.data.users
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;

    this.loading = true;


    this.DoctorService.ListDoctorOffice().subscribe((res:any)=>{
      this.setTimeoutInner();
      if(res.status==200){
        this.loading = false;
        console.log("==================11====11=========================")
        this.doctor=res.data.result
        console.log(this.doctor)

      }

    
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;

  }
  //-------------------------------------------------------------------------------------------------
  //                                                    functions
  //-------------------------------------------------------------------------------------------------

  ReturnTo(){
    this.router.navigate(['/dashboard1/managebooking'])
  }
  errorMsg1:any;
  errorMsg2:any;

  addbooking(){
    // this.loading = true;


    if (!this.selecteduserIds) {
      this.errorMsg1 =1;
      return;
    }
    else if (!this.selectedDoctorIds) {
      this.errorMsg2 =1;
      return;
    }
    
    this.router.navigate(['/dashboard1/selectturn/'+this.selecteduserIds+'/'+this.selectedDoctorIds])





    
}

}

