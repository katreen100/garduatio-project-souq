import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-rate',
  templateUrl: './user-rate.component.html',
  styleUrls: ['./user-rate.component.css']
})
export class UserRateComponent implements OnInit {
  @Input() firstRate:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  //the function when use choose the rate is here
  rateChange(_rate: number) {
    console.log(_rate)
  }
}
