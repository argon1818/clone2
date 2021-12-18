import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MainserviceService {
    public baseUrl: string = 'http://localhost:4200/';
    public bearer="";
    public serverURL: string = 'https://irobex.com';
    // public serverTwoURL: string = 'https://ncb.nobancorebackend.nobaan.cscloud.ir';
    public serverTwoURL: string = 'http://127.0.0.1:5000';

    public serverThreeURL:string ='http://127.0.0.1:5000';
    public serverRBCURL:string ='http://127.0.0.1:8545';
    public serverMARKETURL:string ='http://127.0.0.1:8080';

    // public xToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDc0NTY0MjEsInVzZXJuYW1lIjoicHVibGljIiwicm9sZSI6InVzZXIifQ.qheCcPvyv0TcXdUm_1d1TMKerqDsmxZt0LVVNlYVZOg"
  
  constructor(private http: HttpClient) {
    let access_token=localStorage.getItem("access_token");
    this.bearer="Bearer "+access_token;

    // if(localStorage.getItem("access_token")){ let access_token=localStorage.getItem("access_token");
    // this.bearer="Bearer "+access_token;}
    // else{
    //   this.router.navigate(['/dashboard/login']);
    // }

   }
    
}
