import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient
  ) { }

  async getChartData() : Promise<any> {
    const chartUrl = 'https://run.mocky.io/v3/e043a24e-4e9d-49c1-a8f6-62b6e62df0e7';
    return await lastValueFrom(this.http.get(chartUrl));
  }
}
