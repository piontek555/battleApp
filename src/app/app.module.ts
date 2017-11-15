import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowStatsComponent } from './show-stats/show-stats.component';
import { ApiProviderService } from './api-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [{
    provide: ApiProviderService,
    useClass: ApiProviderService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
