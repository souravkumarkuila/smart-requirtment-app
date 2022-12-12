import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component implements OnInit {
  pendingOffersData: any;

  constructor(private offerService: OfferService) {}
  async ngOnInit() {
    this.pendingOffersData = await this.offerService.getPendingOffersData();
  }
}
