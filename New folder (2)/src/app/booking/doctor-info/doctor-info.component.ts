import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'jalali-moment';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/service/booking.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";


@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.scss']
})
export class DoctorInfoComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  moment:any;
  today: any;
  firsttime: any;
  day: any;
  dayweek: any;
  data: any;
  error1: any;
  datepick: string = '';
  time: string = '';
  valuerow: string = '';
  id: any;
  item:any;
  m:any
  c: any;
  days:any;
  d:any;
  p: any;
  nobat:any;
  y:any="kkkkkkkkkkkkkkk";
  month:any;
  monthweek:any;
  year:any;
  x:any;
  h:any

  constructor(private route:ActivatedRoute,private DoctorService:DoctorService,private BookingService:BookingService, private router: Router,  public dialog: MatDialog,private toastr: ToastrService ){     
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

  }
  result:any;
  shift:any;

  ////getdate from calender
  public GetDateFunction(e: Event) { 
    this.datepick = (<HTMLInputElement>e.target).value;
    this.data = this.datepick;
    console.log("---------------------")
    console.log(this.data)
    let date=this.data

    let data2={
      "date": this.data,
      "doctor_office_id": this.dr_office_id
    }
    this.loading = true;


    this.BookingService.Get_a_turnbasedate(data2).subscribe((res: any) => {
      this.setTimeoutInner();

      console.log(res.status);
      if (res.status == 405) {
        this.loading = false;

        this.toastr.error("   نوبتی در این تاریخ ثبت نشده است", 'خطا');
      }

      if (res.status == 200) {  
        this.loading = false;

        this.result=res.data
        console.log(this.result)
        this.shift=this.result[0].shift
        console.log(this.result[0].shift)  
        console.log("::::::::::::::::::::::::::")
        console.log(date)    
        this.p = this.getweekdays(date);
        console.log("888888888888888888888888888888")
        console.log(this.p)
        console.log("LLLLLLLLLLLLLLLLLLLL")

        console.log(this.p,this.shift)
        this.d = this.setbooking(this.p,this.shift);


       

      }

  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ;

    
  }




////getdate from radiobuttom
  public GettimeFunction(e: Event) {
    this.time = (<HTMLInputElement>e.target).value;
    if (this.time === "today") {
      this.data = moment().locale('fa').format('YYYY-MM-DD');
  


      let date=this.data

      let data2={
        "date": this.data,
        "doctor_office_id": this.dr_office_id
      }
      console.log("fffffffffffffffffff")

      console.log(data2)
      this.loading = true;

  
      this.BookingService.Get_a_turnbasedate(data2).subscribe((res: any) => {
        this.setTimeoutInner();

        console.log(res.status);
        if (res.status == 405) {
          this.loading = false;

          this.toastr.error("   نوبتی در این تاریخ ثبت نشده است", 'خطا');
        }
  
        if (res.status == 200) {  
          this.loading = false;

          this.result=res.data
          console.log(this.result)
          this.shift=this.result[0].shift
          console.log(this.result[0].shift)  
          console.log("::::::::::::::::::::::::::")
          console.log(date)    
          this.p = this.getweekdays(date);
          console.log("888888888888888888888888888888")
          console.log(this.p,this.shift)
          this.d = this.setbooking(this.p,this.shift);
  
  
         
  
        }
  
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;



      
    }
    else {
      this.data = this.datepick;
    }
    console.log("========================")
    console.log(this.data)

  }





 ////getday from date
  public getweekdays(date: string) {
    
    this.m=moment.from(date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'); 
    this.c=moment(this.m).day();
    switch (this.c) {
      case 0:
        this.dayweek = "یکشنبه";
        return this.dayweek;
      
      case 1:
        this.dayweek = "دوشنبه";
        return this.dayweek;
      case 2:
        this.dayweek = "سه شنبه";
        return this.dayweek;
      case 3:
        this.dayweek = "چهارشنبه";
        console.log(this.dayweek)
        break;
      case 4:
        this.dayweek = "پنجشنبه";
        return this.dayweek;
      case 5:
        this.dayweek = "جمعه";
        return this.dayweek;
      case 6:
        this.dayweek = "شنبه";
        return this.dayweek;

    }

  }





  public getmonthes() {
    
     this.month= moment().month();
    
    switch (this.month) {
      case 0:
        this.monthweek = "بهمن ";
        return this.monthweek;
      
      case 1:
        this.monthweek = "اسفند ";
        return this.monthweek;
        
      case 2:
        this.monthweek = "فروردین ";
        return this.monthweek;
      case 3:
        this.monthweek = "اردیبهشت ";
        return this.monthweek;
      case 4:
        this.monthweek = "خرداد ";
        return this.monthweek;
      case 5:
        this.monthweek = "تیر ";
        return this.monthweek;
      case 6:
         this.monthweek = "مرداد";
        return this.monthweek;
      case 7:
         this.monthweek = "شهریور";
        return this.monthweek;
      case 8:
         this.monthweek = "مهر";
        return this.monthweek;
      case 9:
         this.monthweek = "آبان";
        return this.monthweek;
      case 10:
         this.monthweek = "آذر";
        return this.monthweek;
      case 11:
         this.monthweek = "دی";
        return this.monthweek;

    }

  }



//////
    public setbooking(day: string,noabt: string) {
      console.log("gggggggggggggggggggggggggggggggg")
      console.log(day)
      console.log(this.nobat)
    var x;
    var ths = document.getElementsByTagName('th');
    var trs = document.getElementsByTagName('tr');
    var tb = document.getElementsByTagName('table')[0];
    var column = [];
    
    for (var i = 0; i < ths.length; i++) {
      if (ths[i].innerHTML.indexOf(day) !== -1) {
        this.id = i;///c
      }
    }
    if(noabt==="صبح"){
      
     tb.rows[1].cells[this.id].innerHTML="نوبت موجود است، زمان حضور در مطب ساعت:"+this.result[0].start_time

    }
    if(noabt==="عصر")
    

    tb.rows[2].cells[this.id].innerHTML="نوبت دریافت شد"

    }
    
public getyear()
{
  this.month= moment().month();
  if (this.month==0||this.month==1){
    this.year= moment().year()-622; 
  }
  else {
    this.year= moment().year()-621; 
  }
  
   
}
  

dr_office_id:any;
user_id:any;
doctor:any;

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.dr_office_id= params['iddr']
      this.user_id= params['iduser']    
    })
    console.log("==================11====11=========================")

    this.DoctorService.GetDoctorInfoBaseoffice_dr_id(this.dr_office_id).subscribe((res:any)=>{
      console.log("==================11====11=========================")
      this.doctor=res.data
      console.log("==================================================")
      console.log(this.doctor)
    
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;


    this.year= this.getyear();
    this.x= this.getmonthes();

    
}


getturn(){
  this.loading = true;


  let data={
    "user_id":this.user_id,
    "office_doctor_id": this.dr_office_id,
    "turn_id":this.result[0].turn_id,
    "tracking_num": 1,  
    }
    var delBtn = confirm("از دریافت نوبت مطمئن هستید؟");

    if ( delBtn == true ) {

    this.BookingService.Addbooking(data).subscribe((res:any)=>{
      this.setTimeoutInner();

      
      if (res.status==200){
        this.loading = false;

        this.toastr.success('نوبت ثبت شد', '');  

        this.router.navigate(['/dashboard'])

        // this.toastr.success('نوبت ثبت شد', '');  


      }      
      if (res.status==405){
        this.loading = false;

        this.toastr.error('کاربر برای این پزشک نوبت فعال دارد', '');           
      }  
      if (res.status==406){
        this.loading = false;

        this.toastr.error('نوبت خالی وجود ندارد', '');           
      }  
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ; 

}
}

}
