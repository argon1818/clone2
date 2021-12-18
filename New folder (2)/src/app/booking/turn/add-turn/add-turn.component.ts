import { Component, OnInit, Pipe } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'jalali-moment';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/service/booking.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-add-turn',
  templateUrl: './add-turn.component.html',
  styleUrls: ['./add-turn.component.scss']
})



export class AddTurnComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  office_doctor_id:any;
  doctor_name:any;
  doctor_surname:any;
  dtOptions: any = {};
  filterTerm: string="";

  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private route:ActivatedRoute,private router:Router,private BookingService:BookingService) {
    
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

    this.configTable = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };


  
  }


 ngOnInit() {

   
  this.BookingService.GetTurnaddedyou().subscribe((res:any)=>{
    this.list_turn=res.data   
    console.log(this.list_turn)

    if (this.list_turn.length>0){
        this.search_btn=false

    }
  },(error:any)=> {
    this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
  }) ; 
   


   this.route.params.subscribe(params => {
     this.office_doctor_id=params['id']
 });
 this.BookingService.GetDoctorInfo(this.office_doctor_id).subscribe((res:any)=>{
  this.doctor_name=res.data.doctors.user.name;
  this.doctor_surname=res.data.doctors.user.surname;

},(error:any)=> {
  this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
}) ;



}

//=================================shanbe=================================
date_0:string ='';
StartHour_0:string = '';
EndHour_0:string = '';
GetTurn_0:string ='';
submit_0:any;
configTable: any;
search_btn:any=true
collection = { count: 60, data: [] };


list_date_add:any=[]
k1:any=0

  AddturnShanbeForm = new FormGroup({
    start1 : new FormControl(''),
    end1 : new FormControl(''),
    number1 : new FormControl(''),
    day1 : new FormControl(''),

  }); 
  ReturnTo0(){
    this.AddturnShanbeForm.get('start1')?.reset();
    this.AddturnShanbeForm.get('end1')?.reset();
    this.AddturnShanbeForm.get('number1')?.reset();
    this.AddturnShanbeForm.get('day1')?.reset();

  }

  public GetDateFunction_0(e:Event){
    this.date_0 = (<HTMLInputElement>e.target).value;
  }

 public GetStartHourFunction_0(e:Event){
      this.StartHour_0 = (<HTMLInputElement>e.target).value;
}

  public GetEndHourFunction_0(e:Event){
    this.EndHour_0=''
      this.EndHour_0 = (<HTMLInputElement>e.target).value;
  }

  public GetTurnFunction_0(e:Event){
    this.GetTurn_0=''
    this.GetTurn_0 = (<HTMLInputElement>e.target).value;
  }

  addShanbe(){ 
    this.loading = true;

    let data={
      "office_doctor_id":this.office_doctor_id,
      "date_turn": this.date_0,
      "shift":"صبح",
      "start_time": this.StartHour_0,
      "end_time": this.EndHour_0,
      "num_turn": this.GetTurn_0,
      }
      if (this.StartHour_0==''||this.EndHour_0=='' ||this.GetTurn_0==''|| this.date_0==''){
        this.toastr.error('اطلاعات فرم را کامل کنید', '');  
        return 
      }
      
    if (this.StartHour_0.localeCompare(this.EndHour_0)==1 || this.StartHour_0.localeCompare(this.EndHour_0)==0){
      this.toastr.error('ساعت شروع از ساعت پایان بزرگتر یا مساوی است', '');  
    }
    else if (this.GetTurn_0.localeCompare("0")==-1 || this.GetTurn_0.localeCompare("0")==0){
      this.toastr.error('حداقل تعداد نوبت یک است', '');  
    }
    else{
        
        this.BookingService.AddTurn(data).subscribe((res:any)=>{
          this.setTimeoutInner();


     
          if (res.status==401){
            this.loading = false;

            this.toastr.error('زمانی برای این تاریخ قبلا ثبت شده است', 'خطا');           
          } 
      
          if (res.status==200){
            this.loading = false;

            this.AddturnShanbeForm.reset()
            this.toastr.success('زمان ویزیت با موفقیت ثبت شد', '');  
            // this.submit_0=true

         
            this.BookingService.GetTurnaddedyou().subscribe((res:any)=>{
              this.list_turn=res.data   
              console.log(this.list_turn)
          
              if (this.list_turn.length>0){
                  this.search_btn=false
          
              }
            },(error:any)=> {
              this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
            }) ;
             





       
          }      
         
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ; 

    } 
    

  }



//==================================================عصر===========================

//=================================shanbe=================================
date_0A:string ='';
StartHour_0A:string = '';
EndHour_0A:string = '';
GetTurn_0A:string ='';
submit_0A:any;

  AddturnShanbeFormA = new FormGroup({
    start1 : new FormControl(''),
    end1 : new FormControl(''),
    number1 : new FormControl(''),
    day1 : new FormControl(''),

  }); 

  ReturnTo7(){
    this.AddturnShanbeFormA.get('start1')?.reset();
    this.AddturnShanbeFormA.get('end1')?.reset();
    this.AddturnShanbeFormA.get('number1')?.reset();
    this.AddturnShanbeFormA.get('day1')?.reset();

  }

  public GetDateFunction_0A(e:Event){
    this.date_0A = (<HTMLInputElement>e.target).value;




  }

 public GetStartHourFunction_0A(e:Event){
      this.StartHour_0A = (<HTMLInputElement>e.target).value;
}

  public GetEndHourFunction_0A(e:Event){
      this.EndHour_0A = (<HTMLInputElement>e.target).value;
  }

  public GetTurnFunction_0A(e:Event){
    this.GetTurn_0A = (<HTMLInputElement>e.target).value;
  }

  list_turn:any;

  addShanbeA(){ 
    this.loading = true;

    let data={
      "office_doctor_id":this.office_doctor_id,
      "date_turn": this.date_0A,
      "shift":"عصر",
      "start_time": this.StartHour_0A,
      "end_time": this.EndHour_0A,
      "num_turn": this.GetTurn_0A,
      }
      if (this.StartHour_0A==''||this.EndHour_0A=='' ||this.GetTurn_0A==''|| this.date_0A==''){
        this.toastr.error('اطلاعات فرم مربوط به روز شنبه را کامل کنید', ''); 
        return  
      }

    if (this.StartHour_0A.localeCompare(this.EndHour_0A)==1 || this.StartHour_0A.localeCompare(this.EndHour_0A)==0){
      this.toastr.error('ساعت شروع از ساعت پایان بزرگتر یا مساوی است', '');  
    }
    else if (this.GetTurn_0A.localeCompare("0")==-1 || this.GetTurn_0A.localeCompare("0")==0){
      this.toastr.error('حداقل تعداد نوبت یک است', '');  
    }
    else{
     
  
        this.BookingService.AddTurn(data).subscribe((res:any)=>{
          this.setTimeoutInner();

      
          if (res.status==200){
            this.loading = false;

            // this.AddturnShanbeFormA.reset()
            this.router.navigate(['/dashboard1/manageturn'])

            this.toastr.success('زمان ویزیت با موفقیت ثبت شد', '');  
            // this.submit_0=true

         
            this.BookingService.GetTurnaddedyou().subscribe((res:any)=>{
              this.list_turn=res.data   
              console.log(this.list_turn)
          
              if (this.list_turn.length>0){
                  this.search_btn=false
          
              }
            },(error:any)=> {
              this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
            }) ;         

     
          }            
          if (res.status==401){
            this.loading = false;

            this.toastr.error('نوبتی برای این تاریخ قبلا ثبت شده است', '');           
          }  
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;  

    } 
    

  }





  ReturnToback(){
    this.router.navigate(['/dashboard1/manageturn'])

  }

  EditTurn(item:any){
    this.router.navigate(["/dashboard1/editturn2/"+item+"/"+this.office_doctor_id])  
  }
  
  list_date_add2:any=[]
  delet_a:any=[]
  k:any
  DeleteTurn(item:any,item2:any){
    this.loading = true;

  
    var delBtn = confirm(" از پاک شدن زمان ویزیت مطمئن هستید؟");
  
      if ( delBtn == true ) {
        this.BookingService.Delete_a_Turn(item).subscribe((res:any)=>{

          // window.location.reload();
        
          this.BookingService.GetTurnaddedyou().subscribe((res:any)=>{
            this.setTimeoutInner();
if(res.status==200){
  this.loading = false;
  this.list_turn=res.data   
  console.log(this.list_turn)

  if (this.list_turn.length>0){
      this.search_btn=false

  }

}
     
          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ; 
           
          




          this.toastr.success('عملیات با موفقیت انجام شد', '');         
        },(error:any)=> {
          this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
        }) ; 
      }   
      
  }

}
