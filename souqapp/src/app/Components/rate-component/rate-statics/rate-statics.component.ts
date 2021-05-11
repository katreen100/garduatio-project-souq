import { Component, Input, OnInit } from '@angular/core';
import { IRate } from 'src/app/Viewmodels/Rate/irate';

@Component({
  selector: 'app-rate-statics',
  templateUrl: './rate-statics.component.html',
  styleUrls: ['./rate-statics.component.css']
})
export class RateStaticsComponent implements OnInit {
  @Input() rate: IRate;
  total = 0;
  constructor() { 
  }
  ngOnInit(): void {
    this.total = (this.rate.one + this.rate.two + this.rate.three + this.rate.four + this.rate.five)
  }
  getRate(value: number) {
    return (value / this.total) *100
  }
}
