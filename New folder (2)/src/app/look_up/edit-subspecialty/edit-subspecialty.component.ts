import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-edit-subspecialty',
  templateUrl: './edit-subspecialty.component.html',
  styleUrls: ['./edit-subspecialty.component.scss']
})
export class EditSubspecialtyComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  submitted = false;
  data:any;
  data2:any
  error1:any;
  speciality_id:any;
  x:any;
  agent_id:any;
  name_special:any;
  AddForm = new FormGroup({
 name: new FormControl(''),


  }); 
  editItem:any;
  special_id2:any;
  selectedRoleIds: number[] =[];

  //---------------------------------------------------------------
  
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute, private router:Router, private lookupService:lookupService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddForm= this.formBuilder.group({
      name : new FormControl('',[Validators.required]),


  });
}
  
  ngOnInit() {
    this.lookupService.ListSpecialty().subscribe((res:any)=>{
      this.data=res.data
      console.log(this.data)
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 


    this.route.params.subscribe(params => {
      if(params['id']){
        console.log(params['id'])
        this.lookupService.GetSubSpecialInfo(params['id']).subscribe((res:any)=>{
          this.editItem=res.data;
          console.log("==================================")
          console.log(this.editItem)
          this.special_id2=this.editItem.id;
          this.selectedRoleIds=this.editItem.specialty_id;
          console.log(this.selectedRoleIds)
          this.AddForm.patchValue({
            name:this.editItem.name_special,
          });
        })
      }else{
      }
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 


  }
  get f() { return this.AddForm.controls; }

    selectspecialty(item:any){

    this.speciality_id=item.target.value;
    console.log(item.target.value)   
      
  }
//-------------------------------------------------------------------

addfunc(){
  this.loading = true;

  this.submitted=true;
  if(this.AddForm.invalid){
    return
  }
  let data={
    "name_subspecial": this.AddForm.value.name,
    "speciality_id":this.selectedRoleIds,
    "id":this.special_id2

  }
  console.log(data)
 
  this.lookupService.EditSubSpecialty(data).subscribe((res:any)=>{
    this.setTimeoutInner();

    this.error1=0;
    if (res.status==401){
      this.loading = false;

      this.error1=1
      console.log("این نام قبلا انتخاب شده است");
    } 
    
    if (res.status==200){
      this.loading = false;

      this.error1=200;
      this.submitted=false;
      this.AddForm.get('name')?.reset();
      this.router.navigate(['dashboard1/managesubspecialty']) 

      this.toastr.success('عملیات با موفقیت انجام شد', '');
    } 
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ; 
}
returnto(){
  this.router.navigate(["dashboard1/managesubspecialty"])

}
}