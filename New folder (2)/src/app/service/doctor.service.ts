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
export class DoctorService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  registerDoctor(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("99999")

     return this.http.post<any>(this.mainservice.serverTwoURL+"/doctor/register",value,httpOptions)
  } 

  DeleteDoctor(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/doctor/delete/"+value,httpOptions)
  } 
 

  ListDoctor(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/doctor/list_doctor",httpOptions)
  } 

  ListDoctorOffice(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/doctor/list_doctor_office",httpOptions)
  } 

  GetDoctorInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/doctor/doctorinfo/"+value,httpOptions)
  } 


  GetDoctorInfoBaseoffice_dr_id(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/doctor/getdoctorinfo_officedoctorId/"+value,httpOptions)
  } 

  

  EditDoctor(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/doctor/edit",value,httpOptions)
  }


  Doctorsearch(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  

     return this.http.post<any>(this.mainservice.serverTwoURL+"/doctor/search",value,httpOptions)
  } 
}
