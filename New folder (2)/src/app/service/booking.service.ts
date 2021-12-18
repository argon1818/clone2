import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserViewModel } from '../data-view-model/user-view-model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MainserviceService } from './mainservice.service';



declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class BookingService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  DeleteTurn(value:any){
    console.log("kkkkkkkkkkkkkkkkkk")

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
    console.log("kkkkkkkkkkkkkkkkkk")


     return this.http.delete<any>(this.mainservice.serverTwoURL+"/turn/delete/"+value,httpOptions)
  } 


  AddTurn(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  

     return this.http.post<any>(this.mainservice.serverTwoURL+"/turn/register",value,httpOptions)
  }

  GetTurnaddedyou(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/turn/list_turn_added_you",httpOptions)
  }

  Get_turn_added_inmoment(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  

     return this.http.post<any>(this.mainservice.serverTwoURL+"/turn/list_turn_moment_regster",value,httpOptions)
  }

  Get_a_turnbasedate(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  

     return this.http.post<any>(this.mainservice.serverTwoURL+"/booking/get_a_turn",value,httpOptions)
  }



  Addbooking(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  

     return this.http.post<any>(this.mainservice.serverTwoURL+"/booking/register",value,httpOptions)
  }

  GetDoctorTurn(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/turn/listturn/"+value,httpOptions)
  } 

  GetDoctorInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/turn/doctor_info/"+value,httpOptions)
  } 


  GetListBookingATurn(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/booking/liskbooking_a_turn/"+value,httpOptions)
  } 

  Delete_a_Turn(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  


     return this.http.delete<any>(this.mainservice.serverTwoURL+"/turn/delete_a_turn/"+value,httpOptions)
  } 

  GetTurnInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/turn/turn_info/"+value,httpOptions)
  } 


  GetBookinglist(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/booking/listbooking",httpOptions)
  } 

  GetBookinglistuser(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/booking/listbooking/"+value,httpOptions)
  } 


  GetTurnDeleted(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/booking/listbookingdeleted/"+value,httpOptions)
  } 


  


  EditTurn(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/turn/edit",value,httpOptions)
  }

  Deletebooking(value:any,value2:any){
    console.log("kkkkkkkkkkkkkkkkkk")

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
    console.log("kkkkkkkkkkkkkkkkkk")


     return this.http.delete<any>(this.mainservice.serverTwoURL+"/booking/delete/"+value+"/"+value2,httpOptions)
  } 

  DeleteCancel(value:any,value2:any){
    console.log("kkkkkkkkkkkkkkkkkk")

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
    console.log("kkkkkkkkkkkkkkkkkk")


     return this.http.delete<any>(this.mainservice.serverTwoURL+"/booking/delete_cancel/"+value+"/"+value2,httpOptions)
  } 

}
