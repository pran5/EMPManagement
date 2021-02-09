import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './Resource';
import { Ticket } from './Ticket';
import { Leave } from './LeaveReq';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private con: HttpClient) { }


  getTicket(id:String):Observable<any>{ 

    const url = 'http://localhost:6500/ticket/{id}_nc?id='+id;
        return this.con.get(url);
      }
    
      updateTicket(obj:Ticket):Observable<any>{
        const url = 'http://localhost:6500/ticket_C';
        return this.con.put(url,obj);
      }



  getResource(id:String):Observable<any>{

    const url = 'http://localhost:6500/Resource/ByEid?id='+id;
      return this.con.get(url);
      }

  insertResource(obj:Resource):Observable<any>{
    const url = 'http://localhost:6500/resourcerequest_B';
     return this.con.post(url,obj);
      }  

    singleSelect(id:String): Observable<any>
  {
    const url = 'http://localhost:6500/employees/{id}_A?id='+id;
    return this.con.get(url);
  }

  
  getTeam(id:String):Observable<any>{

    const url = 'http://localhost:6500/team/ofmanager?id='+id;
      return this.con.get(url);
      }

    
      insertMember(obj:any):Observable<any>{
        const url = 'http://localhost:6500/team_B';
         return this.con.post(url,obj);
          }  

          

    getTeamByMeidnEid(meid:String,eeid:String):Observable<any>{

            const url = 'http://localhost:6500/team/Bymangeridnempid?meid='+meid+'&eeid='+eeid;
              return this.con.get(url);
              }

              

    insertTicket(obj:Ticket):Observable<any>{
     const url = 'http://localhost:6500/ticket_B';
     return this.con.post(url,obj);
     } 


     getLeaves(meid:String):Observable<any>{
      const url = "http://localhost:6500/allLeave/Bymangerid?meid="+meid;
      return this.con.get(url);

     }

     leaveAres(obj:Leave): Observable<any>{
      const url = 'http://localhost:6500/leaverequests_C';
      return this.con.put(url,obj);
    }

    getLeave(id:String):Observable<any>{

      const url = 'http://localhost:6500/leaverequests/getleave?id='+id;
          return this.con.get(url);
        }

        insertLeave(obj:Leave):Observable<any>{
          const url = 'http://localhost:6500//leaverequests_B';
          return this.con.post(url,obj);
        }
}
