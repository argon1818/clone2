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
export class OfficeService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService) {   
  }

  registerOffice(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("99999")

     return this.http.post<any>(this.mainservice.serverTwoURL+"/office/register",value,httpOptions)
  } 

  DeleteOffice(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/office/delete/"+value,httpOptions)
  } 
 

  Listoffice(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/office/list_office",httpOptions)
  } 

  EditOffice(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/office/edit",value,httpOptions)
  }


  GetOfficeInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/office/officeinfo/"+value,httpOptions)
  } 
}
