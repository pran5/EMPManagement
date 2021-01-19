import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emp } from './EmpModle';

@Injectable({
  providedIn: 'root'
})
export class NetServiceService {

  constructor(private con: HttpClient) { }

  allEmp(obj: any): Observable<any>
  {
    const url = 'http://localhost:8081/poc1';
    return this.con.post(url, obj);
  }

  loga(obj: any): Observable<any>
  {
    const url = 'http://localhost:8081/login';
    return this.con.post(url, obj);
  }

  allEmpSpring(): Observable<any>
  {
    const url = 'http://localhost:7500/?x=133';
    return this.con.get(url);
  }
}
