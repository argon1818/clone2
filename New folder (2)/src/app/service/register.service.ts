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
export class RegisterService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  Register(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
  console.log("----------1111---------")
     return this.http.put<any>(this.mainservice.serverTwoURL+"/user/register",value,httpOptions)
  } 

  getuser(value:any){
    console.log("----------------")
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/get_user/"+value,httpOptions)
  } 



  getOstan(){
    console.log("22222222222222")
    const httpOptions = { 
    headers: new HttpHeaders({
      
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

 
    })
    };
    console.log("22222222222222")

    return this.http.get<any>(this.mainservice.serverTwoURL+"/province/get_province/0",httpOptions)

                  
  }
  getcities(value:any){

    console.log("----------------ss")
    const httpOptions = { 
      headers: new HttpHeaders({
      
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

 
    })
  };
  console.log("----------------sssssssssssssssssssssssssssssss")
  console.log(value)
     return this.http.get<any>(this.mainservice.serverTwoURL+"/province/get_province/"+value,httpOptions)
  }





  


  
  
}
