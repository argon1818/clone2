import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';
import { lookupService } from 'src/app/service/lookup.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar-special',
  templateUrl: './navbar-special.component.html',
  styleUrls: ['./navbar-special.component.scss']
})
export class NavbarSpecialComponent implements OnInit {

  constructor(private toastr: ToastrService,private router:Router,private lookupService:lookupService,private UserService:UserService,private DoctorService:DoctorService,private formBuilder:FormBuilder) { }
  data_city:any;
  specialty:any;
  data_result:any=[1,2]
  s="dddddd"


  ngOnInit(): void {


    this.lookupService.Getprovince().subscribe((res:any)=>{
      this.data_city=res.data
    })
    this.lookupService.ListSubspecialtyAndSub().subscribe((res:any)=>{
      this.specialty=res.data
      console.log(":::::::::::::::::::::::::::::::::")
      console.log(this.specialty)
    })

    this.searchform = this.formBuilder.group(
      {
        searchbutton: ['', Validators.required]
      })
  }

  city_id:any=0
  specialty2:any;

  selectOstan(item:any){
    this.city_id=item.target.value
 }
 searchform = new FormGroup({}) ;

 

 search(){

  if (this.searchform.invalid){
    return;
  } 
   let data={
    "state_id": this.city_id,
    "name": this.searchform.value.searchbutton,

   }

   this.DoctorService.Doctorsearch(data).subscribe((res:any)=>{
    this.specialty2=res.data
    console.log("::::::::::::::::::::::::::::::::::::")

    console.log(this.specialty2)
  })

 }

 special(){

 }

  register(){
    this.router.navigate(['/register'])


  }
  Navigatemain(){
    this.router.navigate(["/"])

  }
  x:any;
  user_id:any;

  Navigatetobooking(item:any){
    if(localStorage.getItem("access_token")){
      this.x=JSON.parse(localStorage.getItem('user')|| '{}')
      this.user_id=this.x.user_id;
  
      this.UserService.GetUserInfoprofile(this.user_id).subscribe((res:any)=>{
        this.user_id=res.data.id;
      });
        this.router.navigate(["/dashboard/getbooking/"+item+"/"+this.user_id])
    }
    else {
      this.toastr.error('برای دریافت نوبت وارد پروفایل خود شوید', '');

    }

  }



}
