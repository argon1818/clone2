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
export class AssignRoleService {

 
  constructor(private http: HttpClient,  private mainservice: MainserviceService) {   
  }

  AddAssignRole(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL+"/assignrole/register",value,httpOptions)
  } 


  ListAssignrole(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
    console.log(";;;;;;;;;;;;;;;;;;;;;")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/assignrole/userinfo22",httpOptions)
  } 


  DeleteAssignrole(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  }; 
     return this.http.delete<any>(this.mainservice.serverTwoURL+"/assignrole/delete/"+value,httpOptions)
  } 
 
  EditAssignrole(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/assignrole/edit",value,httpOptions)
  } 

  GetAssignroleInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/assignrole/assignroleinfo/"+value,httpOptions)
  } 

}

// GetAssignroleInfo(value:any){
//   const httpOptions = { 
//     headers: new HttpHeaders({
//     'Content-Type':'application/json',
//     'Authorization': this.mainservice.bearer,
//   })
// };  
//    return this.http.get<any>(this.mainservice.serverTwoURL+"/assignrole/assignroleinfo/"+value,httpOptions)
// } 

// }
