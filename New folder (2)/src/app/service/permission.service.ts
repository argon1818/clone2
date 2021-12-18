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
export class PermissionService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService ) {   
  }

  Addpermission(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL+"/permission/register",value,httpOptions)
  } 


  Listpermission(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/permission/list_permission",httpOptions)
  } 


  DeletePermission(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/permission/delete/"+value,httpOptions)
  } 


  EditPermission(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/permission/edit",value,httpOptions)
  } 


  GetPermissionInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/permission/permissioninfo/"+value,httpOptions)
  } 


}
