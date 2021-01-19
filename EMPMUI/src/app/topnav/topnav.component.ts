import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {


  avatar = '../../../assets/images/avatars/alan.jpg';
  constructor() { }


  ngOnInit(): void {
  }

}
