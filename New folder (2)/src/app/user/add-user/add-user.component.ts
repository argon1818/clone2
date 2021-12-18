import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component,  OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    surname : new FormControl('',[Validators.required]),
    id_num : new FormControl('',[Validators.required]),
    phone_num : new FormControl('',[Validators.required]),
  }) ;


  submitted = false;
  data:any=[];
  cities:any=[];
  value:number=0;
  id:any;
  name_marital:any="";
  name_gender:any="";
  name_education:any=""
  error1:any;

  userid:any;
  profile_user:any;
  name:any;
  surname:any;
  father_name:any;
  id_num:any;
  email:any;
  phone_num:number=0;
  academic_degree:any;
  nationality:any
  bank_name:any;
  account_num_bank:any;
  card_num_bank:any;
  shaba_num_bank:any;
  address:any;
  marital_status:any;
  name_province:any;
  name_city:any;
  error2:any;
  gender:any;
  passport_num:any;
  user_id:any;
  x:any;
  state_id:any=null;
  city:any;
  province:any;

  constructor(private toastr: ToastrService,private router:Router,private formBuilder:FormBuilder,private RegisterService:RegisterService,private UserService:UserService, private login:LoginService ){
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        father_name: [''],
        id_num: ['', [Validators.required,Validators.pattern('^\\d{10}$')]],
        email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        phone_num: ['', [Validators.required,Validators.pattern('^(\\+98|0)?9\\d{9}$')]],
        bank_name: [''],
        account_num_bank: [''],
        card_num_bank: ['', [Validators.pattern('^\\d{16}$')]],
        shabaInput: ['', [Validators.pattern('^\\d{24}$')]],
        address: [''],
        city: [''],
        education:[''],
        passport_num:[''],
        nationality:[''],
        marital_status:[''],
        gender:[''],
        province:[''],      
      },       
    );
      }      
      get f() { 
        return this.registerForm.controls; }

      ngOnInit(){    

        this.loading = true;    
          this.RegisterService.getOstan().subscribe((res:any)=>{
            this.setTimeoutInner();

            if(res.status==201){
              this.loading = false;
              this.data=res.data
            }
          },(error:any)=> {
            this.loading = false;
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;        
      }     
      
      selectOstan(item:any){
          this.id=item.target.value;
          this.name_province=this.data[this.id-1]
          this.name_province=this.name_province['province']
          this.RegisterService.getcities(this.id).subscribe((res:any)=>{
            this.setTimeoutInner();
            if(res.status==201){
              this.loading=false
              this.cities=res.data;
            }

          },(error:any)=> {
            this.loading = false;
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;
      }

      selectCity(item:any){
          this.state_id=item.target.value;

       }

      selectEducation(item:any){
        this.name_education=item.target.value;
    }

      select_marital_status(item:any){
        this.name_marital=item.target.value;
    }

    select_gender(item:any){
      this.name_gender=item.target.value;
  }
    name_nationality:any="";
    selectnationality(item:any){
      this.name_nationality=item.target.value;
  }


registers(){
  this.loading = true;


  this.submitted = true;

  let data={
  "name": this.registerForm.value.name,
  "surname": this.registerForm.value.surname,
  "email": this.registerForm.value.email,
  "id_num": this.registerForm.value.id_num,
  "father_name": this.registerForm.value.father_name,
  "address": this.registerForm.value.address,
  "gender": this.name_gender,
  "phone_num": this.registerForm.value.phone_num,
  "academic_degree": this.name_education,
  "account_num_bank": this.registerForm.value.account_num_bank,
  "Shaba_num_bank": this.registerForm.value.shabaInput,
  "card_num_bank": this.registerForm.value.card_num_bank,
  "bank_name": this.registerForm.value.bank_name,
  "marital_status": this.name_marital,
  "nationality": this.name_nationality,
  "passport_num": this.registerForm.value.passport_num,
  "state_id": this.state_id,
  }

  this.UserService.registerUser(data).subscribe((res:any)=>{

    this.setTimeoutInner();

    if (res.status==201){
      this.submitted=false;
      this.loading = false;


        this.router.navigate(['/dashboard1/manageuser'])

        this.toastr.success('عملیات با موفقیت انجام شد', '');
    
    } 
    this.error2=0;
    if (res.status==400){
      this.loading = false;

      this.error2=1
    } 
    this.error1=0;
    if (res.status==404){
      this.loading = false;

      this.error1=1
      this.toastr.error("کاربری با این شماره تلفن قبلا ثبت شده است", 'خطا!');
    }  

},(error:any)=> {
  this.loading = false;

  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
      
}
ReturnTo(){
  this.router.navigate(['/dashboard1/manageuser'])

}

}

