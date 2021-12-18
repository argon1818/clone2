import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-secretary',
  templateUrl: './add-secretary.component.html',
  styleUrls: ['./add-secretary.component.scss']
})
export class AddSecretaryComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    surname : new FormControl('',[Validators.required]),
    father_name : new FormControl('',[Validators.required]),
    id_num : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone_num : new FormControl('',[Validators.required]),
    bank_name : new FormControl('',[Validators.required]),
    account_num_bank : new FormControl('',[Validators.required]),
    card_num_bank : new FormControl('',[Validators.required]),
    shabaInput : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    education : new FormControl('',[Validators.required]),
    passport_num : new FormControl('',[Validators.required]),
    nationality : new FormControl('',[Validators.required]),
    marital_status : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    province : new FormControl('',[Validators.required]),


  }) ;
  selected='دیپلم'
  submitted = false;
  data:any=[];
  cities:any=[];
  value:number=0;
  id:any;
  name_marital:any="";
  name_gender:any="";
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

  gender:any;
  passport_num:any;
  user_id:any;
  x:any;
  state_id:any;
  city:any;
  province:any;
  error2:any;
  constructor(private toastr: ToastrService,private router:Router,private formBuilder:FormBuilder,private RegisterService:RegisterService,private SecretaryService:SecretaryService, private login:LoginService ){
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        father_name: ['', Validators.required],
        id_num: ['', [Validators.required,Validators.pattern('^\\d{10}$')]],
        email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        phone_num: ['', [Validators.required,Validators.pattern('^(\\+98|0)?9\\d{9}$')]],
        bank_name: ['', Validators.required],
        account_num_bank: ['', Validators.required],
        card_num_bank: ['', [Validators.required,Validators.pattern('^\\d{16}$')]],
        shabaInput: ['', [Validators.required,Validators.pattern('^\\d{24}$')]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        education:['', Validators.required],
        passport_num:['', Validators.required],
        nationality:['', Validators.required],
        marital_status:['', Validators.required],
        gender:['', Validators.required],
        province:['', Validators.required],      
      },       
    );
      }      
      get f() { 
        return this.registerForm.controls; }

      ngOnInit(){
        
          this.x=JSON.parse(localStorage.getItem('user')|| '{}')
          this.user_id=this.x.user_id;
          console.log(this.x.user_id)      
          this.value=0
          this.RegisterService.getOstan().subscribe((res:any)=>{
            this.data=res.data
            console.log(this.data)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;        
      }     
      
      selectOstan(item:any){
          this.id=item.target.value;
          this.name_province=this.data[this.id-1]
          this.name_province=this.name_province['province']
          this.RegisterService.getcities(this.id).subscribe((res:any)=>{
              this.cities=res.data;
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;
      }

      selectCity(item:any){
          this.state_id=item.target.value;
          // this.name_city=item.target.value;
          // this.RegisterService.getcities(this.id).subscribe((res:any)=>{
          //     this.cities=res.data;
          //     console.log(res.data)
          // })
       }

      name_education:any;
      selectEducation(item:any){
        this.name_education=item.target.value;
    }

      select_marital_status(item:any){
        this.name_marital=item.target.value;
    }

    select_gender(item:any){
      this.name_gender=item.target.value;
      console.log(this.name_gender)
  }
    name_nationality:any;
    selectnationality(item:any){
      this.name_nationality=item.target.value;
      console.log(this.name_gender)
  }


registers(){

  this.loading = true;


  this.submitted = true;

  if (this.registerForm.invalid){
    return;
  }

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

  this.SecretaryService.registerSecretary(data).subscribe((res:any)=>{

    this.setTimeoutInner();

    if (res.status==201){
      this.loading = false;

      this.submitted=false;
        this.registerForm.get('name')?.reset();
        this.registerForm.get('surname')?.reset();
        this.registerForm.get('email')?.reset();
        this.registerForm.get('id_num')?.reset();
        this.registerForm.get('father_name')?.reset();
        this.registerForm.get('address')?.reset();
        this.registerForm.get('gender')?.reset();
        this.registerForm.get('phone_num')?.reset();
        this.registerForm.get('academic_degree')?.reset();
        this.registerForm.get('account_num_bank')?.reset();
        this.registerForm.get('card_num_bank')?.reset();
        this.registerForm.get('bank_name')?.reset();
        this.registerForm.get('marital_status')?.reset();
        this.registerForm.get('nationality')?.reset();
        this.registerForm.get('passport_num')?.reset();
        this.registerForm.get('shabaInput')?.reset();
        this.registerForm.reset();

        this.router.navigate(['/dashboard1/managesecretary'])

        this.toastr.success('عملیات با موفقیت انجام شد', '');
    
    } 
    this.error1=0;
    this.error2=0;

    if (res.status==404){
      this.loading = false;

      this.error1=1
      this.toastr.error("کاربری با این شماره تلفن قبلا ثبت شده است", 'خطا!');
    }  
    if (res.status==400){
      this.loading = false;

      this.error2=1
    }  

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
      
}
ReturnTo(){
  this.router.navigate(['/dashboard1/managesecretary'])

}
}

