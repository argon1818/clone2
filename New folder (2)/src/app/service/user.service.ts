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
export class UserService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  registerUser(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("99999")

     return this.http.post<any>(this.mainservice.serverTwoURL+"/user/register",value,httpOptions)
  } 


  EditUser(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/user/edit",value,httpOptions)
  }

  EditprofileUser(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/user/editprofile",value,httpOptions)
  }


  DeleteUser(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/user/delete/"+value,httpOptions)
  } 
 

  Listuser(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/listuser",httpOptions)
  } 

  Listuserroles(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
  console.log("----------------------")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/listuser2",httpOptions)
  } 


  GetUserInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/userinfo/"+value,httpOptions)
  } 

  GetUserInfoprofile(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/userinfoprofile/"+value,httpOptions)
  } 


}
