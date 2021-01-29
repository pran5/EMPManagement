import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/Ticket';
import { serialize } from 'v8';
import { EmployeeService } from 'src/app/employee.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticketss: Array<Ticket> = [];
  open: number = 0;
  closse: number = 0;
  constructor( private ser:EmployeeService) { }

  ngOnInit(): void {
  }

 

 

}
