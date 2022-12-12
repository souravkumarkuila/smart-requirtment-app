import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  async getPendingOffersData(): Promise<any> {
    const offerUrl = 'https://run.mocky.io/v3/c90a5502-cf9a-43ad-b83a-8e7e8b19b905';
    return await lastValueFrom(this.http.get(offerUrl));
  }

  async getBonusApproval(): Promise<any> {
    const bonusUrl = 'https://run.mocky.io/v3/a13eb423-0ca5-47cf-8d62-57fc1f5a5cf4';
    return await lastValueFrom(this.http.get(bonusUrl));
  }
}
