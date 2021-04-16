import { Component, Input, OnInit } from '@angular/core';
import { IRate } from 'src/app/Viewmodels/Rate/irate';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit {
  @Input() productRate:IRate;
  @Input() avgRate:number;
  prdRateFlag:boolean;
  constructor() {
    this.productRate = {
      oneStar: 2,
      twoStar: 0,
      threeStar: 0,
      fourStar: 6,
      fiveStar: 27,
      total: 35
    }
    this.avgRate=3.6
    this.prdRateFlag = this.avgRate==0? true:false;
   }

  ngOnInit(): void {
  }

}
