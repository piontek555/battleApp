import { Injectable } from '@angular/core';


@Injectable()
export class ApiProviderService {
  apiUrl: string;
  user: string;

  constructor() {
    this.user = 'piontek555';
    this.apiUrl = `https://api.bf4stats.com/api/playerInfo?plat=pc&name=${this.user}&output=js`;
  }

  makeRequest(): void {
  this.loading = true;
  this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  .subscribe((res: Response) => {
   this.data = res.json();
  this.loading = false;
   });
   }
   console.log(this.user)
}
