import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 

@Injectable()
export class ApiProviderService {
  apiUrl: string;
  user: string;
  data: any;

  constructor(private http: Http) {
    this.user = 'piontek555';
    this.apiUrl = `https://api.bf4stats.com/api/playerInfo?plat=pc&name=${this.user}&output=json`;
  }

  makeRequest(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => {
        this.data = res.json();
        return this.data;
    })
  }

}
