import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/service/login.service';
import { SecretaryService } from 'src/app/service/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  EditForm = new FormGroup({
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
  
  selected:any=""
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
  editItem:any;
  rol:any;

  gender:any;
  passport_num:any;
  user_id:any;
  x:any;
  state_id:any;
  city:any;
  province:any;
  state_idold:any;
  buttonactive:any;

  constructor(private toastr: ToastrService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,private RegisterService:RegisterService,private UserService:UserService, private login:LoginService ){
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.x=JSON.parse(localStorage.getItem('user')|| '{}')
    this.user_id=this.x.user_id;
    console.log(this.user_id)
    this.value=0
    this.RegisterService.getOstan().subscribe((res:any)=>{
      this.data=res.data     
    }) 
    this.EditForm = this.formBuilder.group(
      {
        name: ['', Validators.required, ],
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
    this.EditForm.disable()
    this.buttonactive=true

    
      }      
      get f() { 
        return this.EditForm.controls; }

      ngOnInit(){  
        console.log("4444444444444444")
        console.log(this.user_id)
           
          if(this.user_id){      
            this.UserService.GetUserInfoprofile(this.user_id).subscribe((res:any)=>{
              this.editItem=res.data;
              console.log("666666666666666666")
              console.log(this.editItem)
              this.rol=res.data['roles']   
              if(res.data.state!=null){
                console.log(res.data.state)

                this.id=res.data.state.state_id;    
                this.RegisterService.getcities(this.id).subscribe((res:any)=>{
                    this.cities=res.data;
                },(error:any)=> {
                  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
                }) ;
                this.state_idold=res.data.state.id
                this.user_id=this.editItem.id;
                this.EditForm.patchValue({
                  name:this.editItem.name,
                  surname :this.editItem.surname,
                  father_name:this.editItem.father_name,
                  id_num: this.editItem.id_num,
                  email: this.editItem.email,
                  phone_num: this.editItem.phone_num,
                  bank_name: this.editItem.bank_name,
                  account_num_bank: this.editItem.account_num_bank,
                  card_num_bank: this.editItem.card_num_bank,
                  shabaInput: this.editItem.Shaba_num_bank,
                  address: this.editItem.address,
                  city: res.data.state.id, 
                  education:this.editItem.academic_degree,
                  passport_num:this.editItem.passport_num,
                  nationality:this.editItem.nationality,
                  marital_status:this.editItem.marital_status,
                  gender:this.editItem.gender,
                  province:res.data.state.state_id,
                });
              }     
              console.log("========2==============")



              if(res.data.state==null){
                console.log("========3==============")

                this.user_id=this.editItem.id;
                this.EditForm.patchValue({                  
                  phone_num: this.editItem.phone_num,                  
                });
              }     


                


    
              console.log("ssssssssssssssssssssssss")
              console.log(this.editItem.gender)
            })
          }else{
          }
         
  
      }     
      
      selectOstan(item:any){
        this.state_id=0
          this.id=item.target.value;
          this.name_province=this.data[this.id-1]
          this.name_province=this.name_province['province']
          this.cities=""
          this.RegisterService.getcities(this.id).subscribe((res:any)=>{
              this.cities=res.data;
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;

      }

      selectCity(item:any){
          this.state_id=item.target.value;
   
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

  editactive(){
    this.EditForm.enable()
    this.buttonactive=false
  }


registers(){

  this.loading = true;

  console.log("5555555555555555")

  this.submitted = true;
  if (this.state_id==0){
    return;
  }

  if (this.EditForm.invalid){
    return;
  }
  console.log(this.state_id)


  let data={
  "user_id": this.user_id,
  "name": this.EditForm.value.name,
  "surname": this.EditForm.value.surname,
  "email": this.EditForm.value.email,
  "id_num": this.EditForm.value.id_num,
  "father_name": this.EditForm.value.father_name,
  "address": this.EditForm.value.address,
  "gender": this.name_gender||this.editItem.gender,
  "phone_num": this.EditForm.value.phone_num,
  "academic_degree": this.name_education||this.editItem.academic_degree,
  "account_num_bank": this.EditForm.value.account_num_bank,
  "Shaba_num_bank": this.EditForm.value.shabaInput,
  "card_num_bank": this.EditForm.value.card_num_bank,
  "bank_name": this.EditForm.value.bank_name,
  "marital_status": this.name_marital||this.editItem.marital_status,
  "nationality": this.name_nationality||this.editItem.nationality,
  "passport_num": this.EditForm.value.passport_num,
  "state_id": this.state_id||this.state_idold,
  "agent_id":this.user_id
  }

  console.log(data)

  this.UserService.EditUser(data).subscribe((res:any)=>{

    this.setTimeoutInner();

    console.log("khoroji edit")
    console.log(res.data)
    if (res.status==200){
      this.loading = false;


      this.submitted=false;
      this.toastr.success('عملیات با موفقیت انجام شد', '');
      this.buttonactive=true
     console.log("88888888888888888888888888")
        console.log(this.user_id)

          this.UserService.GetUserInfoprofile(this.user_id).subscribe((res:any)=>{
            this.editItem=res.data;
            console.log(this.editItem)
            this.rol=res.data['roles']   
            if(res.data.state!=null){
              console.log(res.data.state)

              this.id=res.data.state.state_id;    
              this.RegisterService.getcities(this.id).subscribe((res:any)=>{
                  this.cities=res.data;
              })
              this.state_idold=res.data.state.id
              this.user_id=this.editItem.id;
              this.EditForm.patchValue({
                name:this.editItem.name,
                surname :this.editItem.surname,
                father_name:this.editItem.father_name,
                id_num: this.editItem.id_num,
                email: this.editItem.email,
                phone_num: this.editItem.phone_num,
                bank_name: this.editItem.bank_name,
                account_num_bank: this.editItem.account_num_bank,
                card_num_bank: this.editItem.card_num_bank,
                shabaInput: this.editItem.Shaba_num_bank,
                address: this.editItem.address,
                city: res.data.state.id, 
                education:this.editItem.academic_degree,
                passport_num:this.editItem.passport_num,
                nationality:this.editItem.nationality,
                marital_status:this.editItem.marital_status,
                gender:this.editItem.gender,
                province:res.data.state.state_id,
              });
              
            } 

            console.log("========2==============")



            if(res.data.state==null){
              console.log("========3==============")

              this.user_id=this.editItem.id;
              this.EditForm.patchValue({                  
                phone_num: this.editItem.phone_num,                  
              });
            }     


              


  
            console.log("ssssssssssssssssssssssss")
            console.log(this.editItem.gender)
          })
       


        this.EditForm.disable()
        this.loading = false;


    
    } 
    this.error1=0;
    if (res.status==404){
      this.loading = false;

      this.error1=1
      this.toastr.error("کاربری با این شماره تلفن قبلا ثبت شده است", 'خطا!');
    }  

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ; 
      
}
ReturnTo(){
  this.router.navigate(['/dashboard1/manageuser'])

}
}

