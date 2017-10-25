import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';

@Component({
  selector: 'app-show-stats',
  templateUrl: './show-stats.component.html',
  styleUrls: ['./show-stats.component.css']
})
export class ShowStatsComponent implements OnInit {
    stats: string[]
    apiUrl: string

  constructor() {
    this.apiUrl = `https://api.bf4stats.com/api/playerInfo?plat=pc&name=piontek555&output=js`
    this.stats = ['40', '1.25', 'aek'] // mock
  }

  ngOnInit() {
    console.log(this.apiUrl)
  }

}
