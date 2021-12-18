import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../../service/login.service';
import {HttpClient} from '@angular/common/http';
import { Pipe, PipeTransform } from "@angular/core";
import { timer, interval, Observable, Subscription } from 'rxjs';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }
  
//-----------------------------------variable------------------------------

    submitted = false;
    loginPart1=true;
    loginPart2=false;
    phone:any;
    expire:any=0;
    user_id:any;
    error_form2:any;
    role:any;
    routee:any;
    phone_num:string=""
    item:any;

  loginForm = new FormGroup({
    phone_num: new FormControl('')    
  }); 

  loginForm2 = new FormGroup({
    password: new FormControl('')    
  });
  //-----------------------------functions------------------- 

  navigateToDashboard() {
    this.router.navigate(['dashboard'])
  }
  resend(){
    this.logins();
  }

  get f(){
    return this.loginForm.controls;
}

//------------------------------service login------------------------------------
  logins(){

    this.loading = true;

    this.submitted = true;   
    let data={
    "phone_num": this.loginForm.value.phone_num
    }

    if(localStorage.getItem("access_token")){
      localStorage.removeItem("access_token")
      localStorage.removeItem("user")
    }

    this.phone= "0".concat(this.loginForm.value.phone_num);
    this.expire=0

    this.login.Login(data).subscribe((res:any)=>{

      this.setTimeoutInner();

      this.counter = 120;
      this.user_id=res.data;
      console.log("::::::::::::::::::::::::::::::::")
      console.log(this.user_id)
      this.expire=0
        if (res.status==200){
          this.loading = false;

            this.loginPart1=false;
            this.loginPart2=true;          
        }
        if (res.status==406){
          this.loading = false;

          this.expire=406;
          this.loginPart1=true;
          this.loginPart2=false;
        } 
        if (res.status==203){
          this.loading = false;

          this.expire=203;
          this.loginPart1=true;
          this.loginPart2=false;
          console.log("دو دقیقه دیگر تلاش کنید");
        } 
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;       
  }  

  verifys(){
    this.loading = true;

    
    this.submitted = true;
    let data={
      "user_id":this.user_id,
      "code": this.loginForm2.value.password
    } 
    this.login.Verify(data).subscribe((res:any)=>{
      this.setTimeoutInner();


      this.error_form2=0;
      this.counter = 120;

      if(res.status==200){
        this.loading = false;

        console.log(res.user_info)
        this.item=res.data.user_info.user_id
        localStorage.setItem('access_token',res.data.access_token);
        localStorage.setItem('user', JSON.stringify(res.data.user_info));
        this.role=res.data.user_info.role_name;
        console.log(this.role)


        if (this.role=="ادمین"){
          this.router.navigate(['dashboard1/home'])  
        }
        if (this.role=="کاربر پایه"){
          this.router.navigate(["dashboard"])
      }  
      }    

      if (res.status==404){
        this.loading = false;

        this.error_form2=404;
      }
      if (res.status==500){
        this.loading = false;

        this.error_form2=500;
      }
      if (res.status==401){
        this.loading = false;

        this.error_form2=500;
      }   
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;       
  }


  resendcod(){
    this.submitted = true;  
    let data={
    "phone_num": this.phone
    }    
    console.log(data)
    this.login.Login(data).subscribe((res:any)=>{
      this.counter = 120;
  })        
  }

   repass1(){
    this.loginPart1=true;
    this.loginPart2=false;  
    this.router.navigate(['/register'])

   }


  //  repass2(){
  //   this.loginPart1=false;
  //   this.loginPart2=true;  
  //   this.router.navigate(['/register'])

  //  }

  

//---------------------------constructor && ngoninit------------------------------

   constructor(private toastr: ToastrService,private formBuilder:FormBuilder, private router: Router,
    private route: ActivatedRoute , private login: LoginService, private http: HttpClient) {

      this.config.animationType = ngxLoadingAnimationTypes.threeBounce;



      this.loginForm = this.formBuilder.group({
        
        phone_num: ['', [Validators.required, Validators.pattern('^(\\+98|0)?9\\d{9}$')]]
     });

     if(localStorage.getItem('access_token')){
      this.router.navigate(["/register"]);  
     }
     
     }

     ngOnDestroy(){
      this.countDown=null;
    }
//-----------------------timer 2 minute
    countDown:any;
    counter = 120;
    tick = 1000;
    ngOnInit(): void {
      this.countDown = timer(0, this.tick).subscribe(() =>{
        if(this.counter!==0){
  
          --this.counter;
        }
      } );
    }
}
//-----------------------timer-------------------------------
@Pipe({
  name: "formatTime"
})

export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}





