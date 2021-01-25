import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emp } from './EmpModle';
import { Client } from './client';
import { project } from 'src/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private con: HttpClient) { 

  }

  insertEmp(obj: Emp): Observable<any>
  {
    const url = 'http://localhost:6500/employees_B';
    return this.con.post(url, obj);
  }

  singleSelect(id:String): Observable<any>
  {
    const url = 'http://localhost:6500/employees/{id}_A?id='+id;
    return this.con.get(url);
  }

  updateEmp(obj: Emp): Observable<any>
  {
    const url = 'http://localhost:6500/employees_C';
    return this.con.put(url, obj);
  }

  insertClient(obj: Client): Observable<any>
  {
    console.log(obj);
    const url = 'http://localhost:6500/client_B';
    return this.con.post(url, obj);
  }

  insertProject(obj: project): Observable<any>
  {
    console.log(obj);
    const url = 'http://localhost:6500/project_B';
    return this.con.post(url, obj);
  }

  allprojects(): Observable<any>
  {
    
    const url = 'http://localhost:6500/projectexpnddata';
    return this.con.get(url);
  }


}
