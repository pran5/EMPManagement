import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aemployee',
  templateUrl: './aemployee.component.html',
  styleUrls: ['./aemployee.component.css']
})
export class AemployeeComponent implements OnInit {

  selectedPaySlab = "";
  Gender = "";
  selectAccesLevel= "";
  constructor() { }

  ngOnInit(): void {
  }

}
