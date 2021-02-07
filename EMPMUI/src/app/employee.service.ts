import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';
import { Leave } from './LeaveReq';
import { Resource } from './Resource';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private con: HttpClient) { }

  getTicket(id:String):Observable<any>{

const url = 'http://localhost:6500//ticket/{id}_B?id='+id;
    return this.con.get(url);
  }

  updateTicket(obj:Ticket):Observable<any>{
    const url = 'http://localhost:6500/ticket_C';
    return this.con.put(url,obj);
  }

  

  insertLeave(obj:Leave):Observable<any>{
    const url = 'http://localhost:6500//leaverequests_B';
    return this.con.post(url,obj);
  }

  getLeave(id:String):Observable<any>{

    const url = 'http://localhost:6500/leaverequests/getleave?id='+id;
        return this.con.get(url);
      }

      

  getResource(id:String):Observable<any>{

    const url = 'http://localhost:6500/Resource/ByEid?id='+id;
      return this.con.get(url);
      }

  insertResource(obj:Resource):Observable<any>{
    const url = 'http://localhost:6500/resourcerequest_B';
     return this.con.post(url,obj);
      }  
      
      getsTeams(id:String):Observable<any>{

        const url = 'http://localhost:6500/projectddataByEmp?id='+id;
          return this.con.get(url);
          }

}
