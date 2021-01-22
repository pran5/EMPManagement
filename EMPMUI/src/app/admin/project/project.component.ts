import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Complete', 'Incomplete'];
  public doughnutChartData: number[] = [90,10];
  colors = ['#34a853', '#FBBC05'];
  chartOptions = {
    responsive: true,
    legend: {
      display: false
   } 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
