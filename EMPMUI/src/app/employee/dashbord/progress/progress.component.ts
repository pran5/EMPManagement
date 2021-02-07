import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() op:number = 0;
  @Input() cl:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
