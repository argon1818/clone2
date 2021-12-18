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
import { ActivatedRoute, Router } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.scss']
})
export class EditOfficeComponent implements OnInit {

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
  valid2:any;

  gender:any;
  passport_num:any;
  user_id:any;
  x:any;
  state_id:any;
  city:any;
  province:any;
  docid:any;
  biography:any;
  tittle:any;
  datavisit:any;
  selectedvisitIds: number[] =[];
  selectedsecretaryIds: number[] =[];
  selecteddoctorIds: number[] =[];
  secretary:any;
  doctor:any;
  editItem:any;
  office_id:any;
  state_idold:any;
  editItem2:any;

  constructor(private toastr: ToastrService,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder,private lookupService:lookupService,private DoctorService:DoctorService,private SecretaryService:SecretaryService,private RegisterService:RegisterService,private OfficeService:OfficeService){
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


        this.route.params.subscribe(params => {
          this.office_id=params['id']
          if(params['id']){


            this.OfficeService.GetOfficeInfo(params['id']).subscribe((res:any)=>{
              console.log(res.data[0])

              this.editItem=res.data[0];
              this.editItem2=res.data[1];

              console.log(this.editItem)


              this.state_idold=this.editItem.state.id;
              console.log(this.state_idold)

              console.log(this.editItem)
              this.RegisterService.getcities(this.editItem.state.state_id).subscribe((res:any)=>{
                this.cities=res.data;
            },(error:any)=> {
              this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
            }) ;

            let temp=[];
            console.log(this.editItem2[0])
            for (let i = 0; i< this.editItem2.length; i++){
              temp.push(this.editItem2[i].doctor_id)
            } 

    
            this.selecteddoctorIds=temp;

            let temp2=[];
            for (let i = 0; i< this.editItem2.length; i++){
     
              temp2.push(this.editItem2[i].secretary_id)
            } 
    
            this.selectedsecretaryIds=temp2;

            let temp3=[];
            for (let i = 0; i< this.editItem.type_visit_office.length; i++){
              temp3.push(this.editItem.type_visit_office[i].type_visit_id)
            } 
    
            this.selectedvisitIds=temp3;



              // this.office_id=this.editItem.id;
              this.registerForm.patchValue({
                name:this.editItem.name,
                tittle:this.editItem.tittle,
                phone_num:this.editItem.phone_num,
                address:this.editItem.address,

                province:this.editItem.state.state_id,
                city: this.editItem.state.id, 




              });
            })
          }else{
          }
        },(error:any)=> {
          this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
        }) ;


      
          this.value=0
          this.RegisterService.getOstan().subscribe((res:any)=>{
            this.data=res.data
            console.log(this.data)
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;   
          this.lookupService.ListTypevisit().subscribe((res:any)=>{
            this.datavisit=res.data
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
            console.log("1111111111111111111111111111111111")
            console.log(this.secretary)
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
  if (this.registerForm.invalid){
    return;
  }

  let data={
  "name": this.registerForm.value.name,
  "tittle": this.registerForm.value.tittle,
  "type_reception": this.selectedvisitIds,
  "secretary":this.selectedsecretaryIds,
  "doctor":this.selecteddoctorIds,
  "address": this.registerForm.value.address,
  "phone_num": this.registerForm.value.phone_num,
  "state_id": this.state_id||this.state_idold,
  "office_id": this.office_id
  }
  this.valid2=1
  if (this.selectedvisitIds.length==0) {
   
    this.errorMsg1 =1;
    return;
  }
  if (this.selectedsecretaryIds.length==0) {
    this.errorMsg2 =1;
    return;
  }
  if (this.selecteddoctorIds.length==0) {
    this.errorMsg3 =1;
    return;
  }

  // for (let i = 0; i < this.selectedvisitIds.length; i++){
  //   data.type_reception.push( this.selectedvisitIds[i])
  // } 
  // for (let i = 0; i < this.selectedsecretaryIds.length; i++){
  //   data.secretary.push( this.selectedsecretaryIds[i])
  // } 
  // for (let i = 0; i < this.selecteddoctorIds.length; i++){
  //   data.doctor.push( this.selecteddoctorIds[i])
  // } 

  this.OfficeService.EditOffice(data).subscribe((res:any)=>{
    this.setTimeoutInner();

    console.log(res.status);
    if (res.status==200){
      this.loading = false;

      this.submitted=false;     
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
