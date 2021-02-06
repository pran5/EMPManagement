import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emp } from './EmpModle';

@Injectable({
  providedIn: 'root'
})
export class NetServiceService {


 
  public A : String;
  public e : Emp;

  constructor(private con: HttpClient) { 
 this.A = new String();
 this.e = new Emp();
  }

  allEmp(obj: any): Observable<any>
  {
    const url = 'http://localhost:8081/poc1';
    return this.con.post(url, obj);
  }

  loga(obj: any): Observable<any>
  {
    const url = 'http://localhost:8081/login';
    let data = this.con.post(url, obj);
    data.subscribe((val:any) => {console.log(val);this.A = val[0].Emp_Firstname; this.e = val[0]; console.log(this.e)});
    
   
    
    return data;
  }

  loginCheck(): Observable<any>
  {
    
    const url = 'http://localhost:8081/logcheck';
    return this.con.get(url);
  }



  allEmpSpring(): Observable<any>
  {
    const url = 'http://localhost:7500/?x=133';
    return this.con.get(url);
  }

  getnotification(): Observable<any>{
    
    const url = 'http://localhost:6500/pushnotification';
    return this.con.get(url);
  }
}
