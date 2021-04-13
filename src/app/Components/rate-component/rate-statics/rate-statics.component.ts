import { Component, Input, OnInit } from '@angular/core';
import { IRate } from 'src/app/Viewmodels/Rate/irate';

@Component({
  selector: 'app-rate-statics',
  templateUrl: './rate-statics.component.html',
  styleUrls: ['./rate-statics.component.css']
})
export class RateStaticsComponent implements OnInit {
  @Input() rate: IRate;
  constructor() { 

  }
  ngOnInit(): void {

  }
  getRate(value: number) {
    return (value / this.rate.total) * 100
  }
}
