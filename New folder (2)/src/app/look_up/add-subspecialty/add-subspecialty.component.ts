import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-subspecialty',
  templateUrl: './add-subspecialty.component.html',
  styleUrls: ['./add-subspecialty.component.scss']
})
export class AddSubspecialtyComponent implements OnInit {

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
 specialty: new FormControl('')


  }); 
  //---------------------------------------------------------------
  
  constructor(private formBuilder: FormBuilder,private router:Router, private lookupService:lookupService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddForm= this.formBuilder.group({
      name : new FormControl('',[Validators.required]),
      specialty : new FormControl('',[Validators.required]),


  });
}
  
  ngOnInit() {
    this.lookupService.ListSpecialty().subscribe((res:any)=>{
      this.data=res.data
    
    }) 
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
    let data={
      "name_subspecial": this.AddForm.value.name,
      "speciality_id":this.speciality_id

    }
    console.log(data)
    if(this.AddForm.invalid){
      return
    }

    this.lookupService.AddSubspecialty(data).subscribe((res:any)=>{
      this.setTimeoutInner();

      this.error1=0;
      if (res.status==401){
        this.loading = false;

        this.error1=1
        console.log("این نام قبلا mmmmانتخاب شده است");
      } 
      
      if (res.status==200){
        this.loading = false;

        this.error1=200;
        this.submitted=false;

        this.AddForm.reset();

        // window.location.reload();

        this.router.navigate(["dashboard1/managesubspecialty"])

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