import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRate } from 'src/app/Viewmodels/Rate/irate';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit, OnDestroy {
  productRate: IRate;
  @Input() parentProduct: string;
  private subscriptions: Subscription[] = []
  prdRateFlag: boolean;
  constructor(private rateService: ProductService) {
    this.productRate = {
      averageRating:0,
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
    }
  }



  ngOnInit(): void {
    let sub = this.rateService.getProductRatingDetails(this.parentProduct).subscribe(res => {
      this.productRate = res;
      this.prdRateFlag = this.productRate.averageRating == 0 ? true : false;
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
