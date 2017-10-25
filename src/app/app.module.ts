import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowStatsComponent } from './show-stats/show-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
