import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';

@Component({
  selector: 'app-show-stats',
  templateUrl: './show-stats.component.html',
  styleUrls: ['./show-stats.component.css']
})

export class ShowStatsComponent implements OnInit {
  stats: any[];

  constructor(private apiService: ApiProviderService) {
    
  }

  ngOnInit() {
    this.apiService.makeRequest().subscribe((res: any) => {
      console.log(res);
      this.stats = res.stats;
      console.log(this.stats);
    })
  }

}
