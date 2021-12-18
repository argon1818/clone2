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
export class RoleService {

 
  constructor(private http: HttpClient,  private mainservice: MainserviceService) {   
  }

  Addrole(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL+"/role/register",value,httpOptions)
  } 


  Listrole(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/role/list_role",httpOptions)
  } 


  DeleteRole(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  }; 
     return this.http.delete<any>(this.mainservice.serverTwoURL+"/role/delete/"+value,httpOptions)
  } 
 
  EditRole(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/role/edit",value,httpOptions)
  } 

  GetRoleInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/role/roleinfo/"+value,httpOptions)
  } 

}
