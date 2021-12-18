import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.scss']
})
export class EditInsuranceComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  submitted = false;
  data:any;
  error1:any;
  x:any;
  agent_id:any;
  special_id2:any;
  editItem:any;
  visit_id1:any;
  AddForm = new FormGroup({
 name: new FormControl('')
  }); 
  
  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute, private lookupService:lookupService, private toastr: ToastrService) { 
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.AddForm= this.formBuilder.group({
      name : new FormControl('',[Validators.required]),
  });
}
  
  ngOnInit() {

    this.route.params.subscribe(params => {
      if(params['id']){
        console.log(params['id'])
        this.lookupService.GetInsuranceInfo(params['id']).subscribe((res:any)=>{
          this.editItem=res.data;
          console.log(res.data)
          this.visit_id1=this.editItem.id;
          this.AddForm.patchValue({
            name:this.editItem.name,
          });
        })
      }else{
      }
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
  }
  get f() { return this.AddForm.controls; }
//-------------------------------------------------------------------

  addfunc(){
    this.loading = true;

    this.submitted=true;
    if(this.AddForm.invalid){
      return
    }
    let data={
      "name": this.AddForm.value.name,
      "insurance_id":this.visit_id1
    }
    console.log(data)
   
    this.lookupService.EditInsurance(data).subscribe((res:any)=>{
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
        this.router.navigate(['dashboard1/manageinsurance']) 

        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
}

returnto(){
  this.router.navigate(["dashboard1/manageinsurance"])

}
}