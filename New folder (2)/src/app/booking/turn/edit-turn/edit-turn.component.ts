import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Pipe } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'jalali-moment';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/service/booking.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";


@Component({
  selector: 'app-edit-turn',
  templateUrl: './edit-turn.component.html',
  styleUrls: ['./edit-turn.component.scss']
})
export class EditTurnComponent implements OnInit {

  public loading = false;
  config: INgxLoadingConfig = {};

   private setTimeoutInner() {
     setTimeout(() => (this.loading = false), 1400);
   }

  editItem:any;

  z='1400-07-08'
  m:any ;
  c:any;
  office_doctor_id:any;
  office_doctor:any;
  submitted:any;
  i:any=0;

  AddturnShanbeForm = new FormGroup({
    day1 : new FormControl('',[Validators.required]),
    start1 : new FormControl('',[Validators.required]),
    end1 : new FormControl('',[Validators.required]),
    number1 : new FormControl('',[Validators.required]),
    shift : new FormControl('',[Validators.required]),
  }); 



  y:any;
  date_0:string ='';
  public GetDateFunction(e:Event){
      this.date_0 = (<HTMLInputElement>e.target).value;
      this.i=this.i+1;
  }  

  addpermissions(){
    this.m= moment(this.z, 'jYYYY-jMM-jDD');
    this.y=this.m.locale('fa').format('YYYY-MM-DD'); // 1367/11/04
    this.c=this.m.add(1, 'day').locale('fa').format('YYYY/MM/DD'); // 1367/11/05
  }

  StartHour:string = '';
  EndHour:string = '';
  GetTurn:string ='';
 public GetStartHourFunction(e:Event){
  this.StartHour=''
      this.StartHour = (<HTMLInputElement>e.target).value;
      console.log(this.StartHour);
     }

  public GetEndHourFunction(e:Event){
    this.EndHour=''
      this.EndHour = (<HTMLInputElement>e.target).value;
      console.log(this.EndHour);
     }

  public GetTurnFunction(e:Event){
    this.GetTurn=''
    this.GetTurn = (<HTMLInputElement>e.target).value;
    console.log(this.GetTurn)
  }




  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private route:ActivatedRoute,private router:Router,private BookingService:BookingService) {
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

   }

   Dr_id:any;
   doctor_name:any;
   doctor_surname:any;


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.office_doctor_id=params['id']
      this.Dr_id=params['id2']

      this.BookingService.GetDoctorInfo(this.Dr_id).subscribe((res:any)=>{
        this.doctor_name=res.data.doctors.user.name;
        this.doctor_surname=res.data.doctors.user.surname;
      
      },(error:any)=> {
        this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
      }) ;

      if(params['id']){

        this.BookingService.GetTurnInfo(params['id']).subscribe((res:any)=>{
          this.editItem=res.data;
          console.log(this.editItem)
          this.office_doctor=this.editItem.office_doctor_id
          this.m= moment(this.editItem.date_turn, 'jYYYY-jMM-jDD');
          this.y=this.m.locale('fa').format('YYYY-MM-DD'); // 1367/11/04   

          this.AddturnShanbeForm.patchValue({
            day1:this.y,
            start1:this.editItem.start_time,
            end1:this.editItem.end_time,
            number1:(this.editItem.num_turn),
            shift:this.editItem.shift,
          });

          },(error:any)=> {
            this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
          }) ;

      }
    }); 
  }


  date_edit:any;
  editTurn(){
    if (this.i>1){
      this.date_edit=this.date_0   

    }
    else{
      this.date_edit=this.AddturnShanbeForm.value.day1
    } 

    let data={
      "turn_id":this.office_doctor_id,
      "date_turn": this.date_edit,
      "shift":this.AddturnShanbeForm.value.shift,
      "start_time": this.StartHour||this.AddturnShanbeForm.value.start1,
      "end_time": this.EndHour||this.AddturnShanbeForm.value.end1,
      "num_turn": this.GetTurn||this.AddturnShanbeForm.value.number1,
      }
      console.log(data["num_turn"])

      if (data["start_time"]==''||data["end_time"]=='' ||data["num_turn"]==''){
        this.toastr.error('اطلاعات فرم را کامل کنید', '');   
        return
      }
  
    if (data["start_time"].localeCompare(data["end_time"])==1 || data["start_time"].localeCompare(data["end_time"])==0){
      this.toastr.error('ساعت شروع از ساعت پایان بزرگتر یا مساوی است', '');  
      return
  
    }
    // else if (data["num_turn"].localeCompare("0")== -1 || data["num_turn"].localeCompare("0")== 0){
    //   this.toastr.error('حداقل تعداد نوبت یک است', '');  
    //   return
  
    // }
      
    
    this.BookingService.EditTurn(data).subscribe((res:any)=>{



       
      
      if (res.status==200){

        this.router.navigate(['dashboard1/listturn/'+this.office_doctor])
        this.toastr.success('عملیات با موفقیت انجام شد', '');

      } 
      if (res.status==404){

        this.toastr.error('تعداد نوبت ها کمتر از تعداد نوبت رزرو شده است', '');

      } 
 
    },(error:any)=> {
      this.toastr.error("در حال حاضر سرور پاسخ گو نمی باشد", 'خطا!');
    }) ;
  }
  ReturnTo1(){
    console.log(this.office_doctor)
    this.router.navigate(['dashboard1/listturn/'+this.office_doctor])
  }

}
