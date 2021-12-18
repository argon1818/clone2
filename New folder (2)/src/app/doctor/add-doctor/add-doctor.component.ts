import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';
import { lookupService } from 'src/app/service/lookup.service';
import { Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  registerForm = new FormGroup({}) ;
  selected:any="";
  submitted = false;
  data:any=[];
  cities:any=[];
  value:number=0;
  id:any;
  name_marital:any="";
  name_gender:any="";

  userid:any;
  profile_user:any;
  name:any;
  surname:any;
  father_name:any;
  id_num:any;
  email:any;
  phone_num:any;
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
  error1:any;
  docid:any;
  site:any;
  biography:any;
  datagrade:any;
  dataspecial:any;
  id_grade:any;
  id_specialty:any;
  datasubspecial:any;
  id_subspecialty:any;
  selectedspecialIds: [] | undefined;
  errorMsg:any;
  data2:any;

  constructor(private toastr: ToastrService,private router:Router,private formBuilder:FormBuilder,private lookupService:lookupService,private RegisterService:RegisterService,private DoctorService:DoctorService,){
     
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

  }        
  
      ngOnInit(){
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
            docid:['', Validators.required],      
            biography:['', Validators.required],      
            // grade:['',Validators.required],
            // special:['',Validators.required],
            // subspecialty:['',Validators.required],
            site:['',Validators.required],
          },       
        );
          this.x=JSON.parse(localStorage.getItem('user')|| '{}')
          // this.user_id=this.x.user_id;
          this.value=0
          this.RegisterService.getOstan().subscribe((res:any)=>{
            this.data=res.data
            console.log(this.data)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;    
          this.lookupService.ListSubandSpecialty().subscribe((res:any)=>{
            this.data2=res.data
            console.log("=====================")
            console.log(this.data2)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;     

          
      }   
      
      get f(): { [key: string]: AbstractControl } {
        return this.registerForm.controls;
      }
      
      selectOstan(item:any){
          this.id=item.target.value;
          this.name_province=this.data[this.id-1]
          this.name_province=this.name_province['province']
          console.log(this.id)
          this.RegisterService.getcities(this.id).subscribe((res:any)=>{
              this.cities=res.data;
          })
      }

      selectCity(item:any){
          this.state_id=item.target.value;
       }

      name_education:any="";
      selectEducation(item:any){
        this.name_education=item.target.value;
        console.log(this.name_education)
    }

      select_marital_status(item:any){
        this.name_marital=item.target.value;
        console.log(this.name_marital)
    }

    select_gender(item:any){
      this.name_gender=item.target.value;
      console.log(this.name_gender)
  }
    name_nationality:any="";
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
  this.errorMsg=0;

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
  "subspecialty_id":[],
  "docid":this.registerForm.value.docid,
  "site":this.registerForm.value.site,
  "biography":this.registerForm.value.biography

  }



  console.log(this.selectedspecialIds)
  if (!this.selectedspecialIds) {
    this.errorMsg =1;
    return;
  }

  for (let i = 0; i < this.selectedspecialIds.length; i++){
    data.subspecialty_id.push( this.selectedspecialIds[i])
    this.selectedspecialIds[i]      
  } 





  
  // this.submitted=false
  this.DoctorService.registerDoctor(data).subscribe((res:any)=>{

    this.setTimeoutInner();

    console.log(res.status);
    this.error1=0
    // if (this.registerForm.invalid){
    //   return;
    // }

    if (res.status==404){
      this.loading = false;

      this.error1=1
      this.error1=1
      this.toastr.error("کاربری با این شماره تلفن قبلا ثبت شده است", 'خطا!');      
    }

    if (res.status==200){
      this.loading = false;

      this.submitted=false;
      
        this.router.navigate(['/dashboard1/managedoctor'])

        this.toastr.success('عملیات با موفقیت انجام شد', '');
    
    }  

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
      
}

ReturnTo(){
  this.router.navigate(['/dashboard1/managedoctor'])
}

img:any;
onFileChanged(event:any) {
  this.img = event.target.files[0];

  console.log(this.img)
}
}
