import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';
import { lookupService } from 'src/app/service/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

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
  state_idold:any;
  selectedspecialIds: number[] =[];
  errorMsg:any;
  data2:any;
  editItem:any;
  rol:any;
  specialty:any;
  constructor(private toastr: ToastrService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,private lookupService:lookupService,private RegisterService:RegisterService,private DoctorService:DoctorService,){
    
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
        docid:['', Validators.required],      
        biography:['', Validators.required],      
        // grade:['',Validators.required],
        // special:['',Validators.required],
        // subspecialty:['',Validators.required],
        site:['',Validators.required],
      },       
    );
    this.RegisterService.getOstan().subscribe((res:any)=>{
      this.data=res.data     
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  }        
  
  ngOnInit(){
    
      this.x=JSON.parse(localStorage.getItem('user')|| '{}')
      this.value=0
  
      this.lookupService.ListSubandSpecialty().subscribe((res:any)=>{
        this.data2=res.data
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;     




      this.route.params.subscribe(params => {
        this.user_id=params['id']
        if(params['id']){  
          console.log("=================================================")
          console.log(params['id'])    
          this.DoctorService.GetDoctorInfo(params['id']).subscribe((res:any)=>{
            this.editItem=res.data;
            console.log(this.editItem)
            console.log(this.editItem.site)
            this.rol=res.data['roles']        
              this.id=this.editItem.user.state.state_id;
              this.specialty=this.editItem.subspecialty
              console.log("************1111*******************")
              console.log(this.id)
              this.RegisterService.getcities(this.id).subscribe((res:any)=>{
                  this.cities=res.data;
              },(error:any)=> {
                this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
              }) ;

              let temp=[];
        for (let i = 0; i< this.specialty.length; i++){
          temp.push(this.specialty[i].specialty_id)
        } 

        this.selectedspecialIds=temp;
        // this.role_old=this.selectedspecialIds

            this.state_idold=this.editItem.user.state.id;
            // this.user_id=this.editItem.id;
            console.log("=========================")
            this.registerForm.patchValue({
              name:this.editItem.user.name,
              surname :this.editItem.user.surname,
              father_name:this.editItem.user.father_name,
              id_num: this.editItem.user.id_num,
              email: this.editItem.user.email,
              phone_num: this.editItem.user.phone_num,
              site: this.editItem.site,
              biography: this.editItem.biography,
              docid: this.editItem.docid,

              bank_name: this.editItem.user.bank_name,
              account_num_bank: this.editItem.user.account_num_bank,
              card_num_bank: this.editItem.user.card_num_bank,
              shabaInput: this.editItem.user.Shaba_num_bank,
              address: this.editItem.user.address,
              city: this.editItem.user.state.id, 
              education:this.editItem.user.academic_degree,
              passport_num:this.editItem.user.passport_num,
              nationality:this.editItem.user.nationality,
              marital_status:this.editItem.user.marital_status,
              gender:this.editItem.user.gender,
              province:this.editItem.user.state.state_id,
            });
        //     console.log("ssssssssssssssssssssssss")
        //     // console.log(this.editItem.gender)
          })
        // }
        }
      }); 

    
      
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

this.errorMsg=0;

let data={
  "user_id": this.user_id,
  "name": this.registerForm.value.name,
  "surname": this.registerForm.value.surname,
  "email": this.registerForm.value.email,
  "id_num": this.registerForm.value.id_num,
  "father_name": this.registerForm.value.father_name,
  "address": this.registerForm.value.address,
  "gender": this.name_gender||this.editItem.user.gender,
  "phone_num": this.registerForm.value.phone_num,
  "academic_degree": this.name_education||this.editItem.user.academic_degree,
  "account_num_bank": this.registerForm.value.account_num_bank,
  "Shaba_num_bank": this.registerForm.value.shabaInput,
  "card_num_bank": this.registerForm.value.card_num_bank,
  "bank_name": this.registerForm.value.bank_name,
  "marital_status": this.name_marital||this.editItem.user.marital_status,
  "nationality": this.name_nationality||this.editItem.user.nationality,
  "passport_num": this.registerForm.value.passport_num,
  "state_id": this.state_id||this.state_idold,

"subspecialty_id":this.selectedspecialIds,
"docid":this.registerForm.value.docid,
"site":this.registerForm.value.site,
"biography":this.registerForm.value.biography

}
console.log(data)
if (!this.selectedspecialIds) {
this.errorMsg =1;
return;
}
if (this.registerForm.invalid){
  console.log("خطا فرم")
  return;
}

this.DoctorService.EditDoctor(data).subscribe((res:any)=>{
  this.setTimeoutInner();

console.log(res.status);
this.error1=0
// if (this.registerForm.invalid){
//   return;
// }

if (res.status==404){
  this.loading = false;

  this.error1=1
  this.toastr.error("کاربری با این شماره تلفن قبلا ثبت شده است", 'خطا!');      
}

if (res.status==200){
  this.loading = false;

  this.submitted=false;
    // this.registerForm.get('name')?.reset();
    // this.registerForm.get('surname')?.reset();
    // this.registerForm.get('email')?.reset();
    // this.registerForm.get('id_num')?.reset();
    // this.registerForm.get('father_name')?.reset();
    // this.registerForm.get('address')?.reset();
    // this.registerForm.get('gender')?.reset();
    // this.registerForm.get('phone_num')?.reset();
    // this.registerForm.get('academic_degree')?.reset();
    // this.registerForm.get('account_num_bank')?.reset();
    // this.registerForm.get('card_num_bank')?.reset();
    // this.registerForm.get('bank_name')?.reset();
    // this.registerForm.get('marital_status')?.reset();
    // this.registerForm.get('nationality')?.reset();
    // this.registerForm.get('passport_num')?.reset();
    // this.registerForm.get('Shaba_num_bank')?.reset();

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
}
