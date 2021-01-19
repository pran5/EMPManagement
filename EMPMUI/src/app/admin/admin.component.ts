import { Component, OnInit, NgModule } from '@angular/core';
import { NbSidebarService, NbSidebarModule } from '@nebular/theme';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
