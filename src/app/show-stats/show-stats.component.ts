import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-stats',
  templateUrl: './show-stats.component.html',
  styleUrls: ['./show-stats.component.css']
})
export class ShowStatsComponent implements OnInit {
    apiUrl: string;
    stats: string[];

  constructor() {
      this.apiUrl = 'OurURLApi'
      this.stats = ['40', '1.25', 'aek']
  }

  ngOnInit() {
  }

}
