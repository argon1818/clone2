import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { UserService } from 'src/app/service/user.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-turnuserdashboard',
  templateUrl: './turnuserdashboard.component.html',
  styleUrls: ['./turnuserdashboard.component.scss']
})
export class TurnuserdashboardComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  initialCount:any="3"

  Count = [];
  mot:number = 4;
  isFill:boolean = false;

  counter(i: number) {
    return new Array(i);
  }

  constructor(private toastr: ToastrService,private BookingService:BookingService,private UserService:UserService) {  this.Count.length = this.mot; //you can give any number
    //
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    }

    x:any;
    user_id:any;
    bookinglist:any;

  ngOnInit(): void {
    this.x=JSON.parse(localStorage.getItem('user')|| '{}')
    this.user_id=this.x.user_id;

    this.UserService.GetUserInfoprofile(this.user_id).subscribe((res:any)=>{
      let userinfo=res.data.id;
      this.BookingService.GetBookinglistuser(userinfo).subscribe((res:any)=>{
        this.bookinglist=res.data.doctor_List;
        console.log(this.bookinglist)
        if (this.bookinglist.length==0){
          this.isFill=true
        }
        else{
          this.isFill=false


        }
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
 

    
        },(error:any)=> {
          this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
        }) ;





  }

}
