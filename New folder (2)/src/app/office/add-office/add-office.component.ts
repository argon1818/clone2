import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { OfficeService } from 'src/app/service/office.service';
import { lookupService } from 'src/app/service/lookup.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.scss']
})
export class AddOfficeComponent implements OnInit {


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
  errorMsg1:any;
  errorMsg2:any;
  errorMsg3:any;

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
  docid:any;
  biography:any;
  short_sms_address:any;
  tittle:any;
  datavisit:any;
  selectedvisitIds: [] | undefined;
  selectedsecretaryIds: [] | undefined;
  selecteddoctorIds: [] | undefined;
  secretary:any;
  doctor:any;
  valid2:any;


  constructor(private toastr: ToastrService,private router:Router,private formBuilder:FormBuilder,private lookupService:lookupService,private DoctorService:DoctorService,private SecretaryService:SecretaryService,private RegisterService:RegisterService,private OfficeService:OfficeService){
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

      }      

  
  
      ngOnInit(){

        this.registerForm = this.formBuilder.group(
          {
            name: ['', Validators.required],
            tittle: ['', Validators.required],
            // type_reception: ['', Validators.required],
            address: ['', Validators.required],
            phone_num: ['', Validators.required],
            city: ['', Validators.required],            
            province:['', Validators.required],              

          },       
        );
      
          this.value=0
          this.RegisterService.getOstan().subscribe((res:any)=>{
            this.data=res.data
            console.log(this.data)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ; 
          this.lookupService.ListTypevisit().subscribe((res:any)=>{
            this.datavisit=res.data
            console.log(this.datavisit)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;    
          
          this.DoctorService.ListDoctor().subscribe((res:any)=>{
            this.doctor=res.data.doctor_List
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ; 
          this.SecretaryService.Listsecretary().subscribe((res:any)=>{
            this.secretary=res.data.secretary_List
            console.log(this.secretary)
            console.log(this.secretary[0].id)

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
          this.RegisterService.getcities(this.id).subscribe((res:any)=>{
              this.cities=res.data;
          })
      }

      selectCity(item:any){
          this.state_id=item.target.value;
          // this.name_city=item.target.value;
          // this.RegisterService.getcities(this.id).subscribe((res:any)=>{
          //     this.cities=res.data;
          //     console.log(res.data)
          // })
       }
   

registers(){
  this.loading = true;

  this.submitted = true;


 
  let data={
  "name": this.registerForm.value.name,
  "tittle": this.registerForm.value.tittle,
  "type_reception": [],
  "secretary":[],
  "doctor":[],
  "address": this.registerForm.value.address,
  "phone_num": this.registerForm.value.phone_num,
  "state_id": this.state_id,

  }
  if (this.registerForm.invalid){
    console.log("خطاااااا")
    return;
  }

  this.valid2=1

  if (!this.selectedvisitIds) {
    this.errorMsg1 =1;
    return;
  }
  if (!this.selectedsecretaryIds) {
    this.errorMsg2 =1;
    return;
  }
  if (!this.selecteddoctorIds) {
    this.errorMsg3 =1;
    return;
  }


  for (let i = 0; i < this.selectedvisitIds.length; i++){
    data.type_reception.push( this.selectedvisitIds[i])
  } 
  for (let i = 0; i < this.selectedsecretaryIds.length; i++){
    console.log("=============================")
    console.log(this.selectedsecretaryIds[i])
    data.secretary.push( this.selectedsecretaryIds[i])
  } 
  for (let i = 0; i < this.selecteddoctorIds.length; i++){
    data.doctor.push( this.selecteddoctorIds[i])
  } 
console.log(data)

if (this.registerForm.invalid){
  console.log("خطاااااا")
  return;
}
  this.OfficeService.registerOffice(data).subscribe((res:any)=>{

    this.setTimeoutInner();

    console.log(res.status);
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


        this.router.navigate(['/dashboard1/manageoffice'])


        this.toastr.success('عملیات با موفقیت انجام شد', '');
    
    }  

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
      
}

ReturnTo(){
  this.router.navigate(['/dashboard1/manageoffice'])
}
}
