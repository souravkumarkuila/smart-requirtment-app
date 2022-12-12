import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutChartComponent } from './component/donut-chart/donut-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './component/filter/filter.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Card1Component } from './component/card1/card1.component';
import { Card2Component } from './component/card2/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    FilterComponent,
    NavbarComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
