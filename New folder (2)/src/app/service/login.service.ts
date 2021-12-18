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
export class LoginService {


  public currentUserSubject: BehaviorSubject<UserViewModel>;
  public static user:any ;
  public currentUser: Observable<UserViewModel>;
 
  constructor(private http: HttpClient, private router: Router, private mainservice: MainserviceService) {
    this.currentUserSubject = new BehaviorSubject<UserViewModel>(JSON.parse(localStorage.getItem('user')|| '{}'));
    LoginService.user = this.currentUserSubject.value;
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserViewModel {
    return this.currentUserSubject.value;
  }
  Login(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL +"/account/login",value,httpOptions)
  } 
  Verify(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({     
      
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
 
    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL +"/account/verification",value,httpOptions)
  }
  getToken() {    
    let tokenjson = localStorage.getItem('access_token');
    tokenjson = JSON.stringify(tokenjson);
    return tokenjson;
  }
  isLoggedIn() {
    if(this.getToken() !== "null")
      return true;
    else
     return false;
  }  
  
}
