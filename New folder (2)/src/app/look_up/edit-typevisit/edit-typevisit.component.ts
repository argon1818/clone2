import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-edit-typevisit',
  templateUrl: './edit-typevisit.component.html',
  styleUrls: ['./edit-typevisit.component.scss']
})
export class EditTypevisitComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};
  submitted = false;
  data:any;
  error1:any;
  x:any;
  agent_id:any;
  special_id2:any;
  editItem:any;
  visit_id1:any;

  AddForm = new FormGroup({
  }); 
  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }
  
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
        this.lookupService.GetVisitInfo(params['id']).subscribe((res:any)=>{
          this.editItem=res.data;
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

  Editfunc(){
    this.submitted=true;
    if(this.AddForm.invalid){
      return
    }

    this.loading = true;

    let data={
      "name": this.AddForm.value.name,
      "visit_id":this.visit_id1
    }
   
    this.lookupService.Edittypevisit(data).subscribe((res:any)=>{
      this.setTimeoutInner();

      this.error1=0;
      if (res.status==401){
        this.loading = false;
        this.error1=1
        console.log("این نام قبلا انتخاب شده است");
      } 
      
      else if (res.status==200){
        this.loading = false;
        this.error1=200;
        this.submitted=false;
        this.router.navigate(['dashboard1/managetypevisit']) 
        this.toastr.success('عملیات با موفقیت انجام شد', '');
      } 
    },(error:any)=> {
      this.loading = false;
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ; 
}

returnto(){
  this.router.navigate(["dashboard1/managetypevisit"])

}
}