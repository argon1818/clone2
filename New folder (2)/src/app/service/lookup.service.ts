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
export class lookupService {

 
  constructor(private http: HttpClient, private mainservice: MainserviceService ) {   
  }

  Addgrade(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("----------------------")
     return this.http.post<any>(this.mainservice.serverTwoURL+"/grade/register",value,httpOptions)
  } 


  Listgrade(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/grade/list_grade",httpOptions)
  } 


  Addinsurance(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("----------------------")
     return this.http.post<any>(this.mainservice.serverTwoURL+"/insurance/register",value,httpOptions)
  } 


  Listinsurance(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/insurance/list_insurance",httpOptions)
  } 


  AddSpecialty(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log(value)
  console.log("----------------------")
     return this.http.post<any>(this.mainservice.serverTwoURL+"/specialty/register",value,httpOptions)
  } 


  ListSubspecialty(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("ttttttttttttttttttttttttttttttttttttt")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/subspecialty/list_subspecialty",httpOptions)
  } 


  ListSubspecialtyAndSub(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      // 'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/specialty/list_specialty_sub",httpOptions)
  } 

    DeleteInsurance(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  }; 
  console.log(value) 

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/insurance/delete/"+value,httpOptions)
  }


  DeleteSubspecialty(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  }; 
  console.log(value) 

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/subspecialty/delete/"+value,httpOptions)
  }
  
  Getlistsub(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
 
  console.log("---------55555555555555555555555-------------")
  console.log(value)
     return this.http.get<any>(this.mainservice.serverTwoURL+"/specialty/list_specialty2/"+value,httpOptions)
  } 


  AddSubspecialty(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log(value)
  console.log("---------55555555555555555555555-------------")
     return this.http.post<any>(this.mainservice.serverTwoURL+"/subspecialty/register",value,httpOptions)
  } 


  ListSpecialty(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("iiiiiiiiiiiiiiiiiiiiii")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/specialty/list_specialty",httpOptions)
  } 


  ListSpecialtysub(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("iiiiiiiiiiiiiiiiiiiiii")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/specialty/list_specialty_sub",httpOptions)
  } 


  ListSubSpecialty2(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("iiiiiiiiiiiiiiiiiiiiii")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/subspecialty/list_specialty",httpOptions)
  } 

  ListSubandSpecialty(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("iiiiiiiiiiiiiiiiiiiiii")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/subspecialty/list_all",httpOptions)
  } 


  DeleteSpecialty(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  }; 

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/specialty/delete/"+value,httpOptions)
  } 
          
  GetSpecialInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/specialty/specialinfo/"+value,httpOptions)
  } 


  GetInsuranceInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/insurance/insuranceinfo/"+value,httpOptions)
  } 


  GetSubSpecialInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/subspecialty/specialinfo/"+value,httpOptions)
  } 

  EditSpecialty(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/specialty/editspecialty",value,httpOptions)
  } 

  EditInsurance(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/insurance/edit",value,httpOptions)
  } 



  EditSubSpecialty(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/subspecialty/editspecialty",value,httpOptions)
  } 


  AddTypevisit(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log(value)
  console.log("---------55555555555555555555555-------------")
     return this.http.post<any>(this.mainservice.serverTwoURL+"/typevisit/register",value,httpOptions)
  } 


  ListTypevisit(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
  console.log("iiiiiiiiiiiiiiiiiiiiii")
     return this.http.get<any>(this.mainservice.serverTwoURL+"/typevisit/list_typevisit",httpOptions)
  } 


  DeleteTypevisity(value:any){

    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  }; 

     return this.http.delete<any>(this.mainservice.serverTwoURL+"/typevisit/delete/"+value,httpOptions)
  } 
       
  GetVisitInfo(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };

     return this.http.get<any>(this.mainservice.serverTwoURL+"/typevisit/visitinfo/"+value,httpOptions)
  } 

  Edittypevisit(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,

    })
  };  
     return this.http.put<any>(this.mainservice.serverTwoURL+"/typevisit/edit",value,httpOptions)
  } 

  Addprovince(value:any){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.mainservice.bearer,
    })
  };  
     return this.http.post<any>(this.mainservice.serverTwoURL+"/province/register_province",value,httpOptions)
  } 


  Getprovince(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/province/get_all_city",httpOptions)
  } 

  Getnumberoffice(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/office/sumoffice",httpOptions)
  } 

  Getnumberdoctor(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/doctor/sumdoctor",httpOptions)
  } 

  Getnumbersecretary(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/secretary/sumsecretary",httpOptions)
  } 

  Getnumberuser(){
    const httpOptions = { 
      headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };  
     return this.http.get<any>(this.mainservice.serverTwoURL+"/user/sumuser",httpOptions)
  } 
}

