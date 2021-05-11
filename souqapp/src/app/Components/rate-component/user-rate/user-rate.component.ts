import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-rate',
  templateUrl: './user-rate.component.html',
  styleUrls: ['./user-rate.component.css']
})
export class UserRateComponent implements OnInit {
  @Input() firstRate: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  //the function when use choose the rate is here
  rateChangeFun(_rate) {
    switch (_rate) {
      case 1:
        console.log('User Choosed 1 star');
        break;
      case 2:
        console.log('User Choosed 2 stars');
        break;
      case 3:
        console.log('User Choosed 3 stars');
        break;
      case 4:
        console.log('User Choosed 4 stars');
        break;
      case 5:
        console.log('User Choosed 5 stars');
        break;
      default:
        break;
    }
  }
}
