import { Component, OnInit } from '@angular/core';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.scss']
})
export class DashboardadminComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }


  constructor(private lookupService:lookupService,private toastr: ToastrService) {
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;


   }
   num_doctor:any=0;
   num_office:any=0;
   num_user:any=0;
   num_secretary:any=0;


  ngOnInit(){
    this.lookupService.Getnumberdoctor().subscribe((res:any)=>{    
      this.num_doctor=res.data
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;

  this.lookupService.Getnumberoffice().subscribe((res:any)=>{    
    this.num_office=res.data
},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;

this.lookupService.Getnumberuser().subscribe((res:any)=>{    
  this.num_user=res.data
},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;

this.lookupService.Getnumbersecretary().subscribe((res:any)=>{    
  this.num_secretary=res.data
},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;


}

}
