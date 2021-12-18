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
export class SecretaryService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  registerSecretary(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("99999")

     return this.http.post<any>(this.mainservice.serverTwoURL+"/secretary/register",value,httpOptions)
  } 

  DeleteSecretary(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
  console.log("666666666666666666666666666666666")

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/secretary/delete/"+value,httpOptions)
  } 
 

  Listsecretary(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
  console.log("44444444444444444444444444444")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/secretary/list_secretary",httpOptions)
  } 



  EditSecretary(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/secretary/edit",value,httpOptions)
  }

}
