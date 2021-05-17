import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRate } from 'src/app/Viewmodels/Rate/irate';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-rate-statics',
  templateUrl: './rate-statics.component.html',
  styleUrls: ['./rate-statics.component.css']
})
export class RateStaticsComponent implements OnInit, OnDestroy {
  @Input() parentID: string;
  private subscriptions: Subscription[] = []
  rate: IRate;
  total = 0;
  constructor(private rateService: ProductService) {
  }
  ngOnInit(): void {
    let sub = this.rateService.getProductRatingDetails(this.parentID).subscribe(res => {
      this.rate = res;
      this.total = (this.rate.one + this.rate.two + this.rate.three + this.rate.four + this.rate.five)
    })
    this.subscriptions.push(sub)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
  getRate(value: number) {
    return (value / this.total) * 100
  }
}
