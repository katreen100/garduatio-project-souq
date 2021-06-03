import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRate } from 'src/app/Viewmodels/Rate/irate';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-user-rate',
  templateUrl: './user-rate.component.html',
  styleUrls: ['./user-rate.component.css']
})
export class UserRateComponent implements OnInit {
  @Input() firstRate: boolean;
  @Input() productId: string;
  @Input() productRate: IRate;
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  //the function when use choose the rate is here
  rateChangeFun(_rate) {

    switch (_rate) {
      case 1:
        this.productRate.one++;
        break;
      case 2:
        this.productRate.two++;
        break;
      case 3:
        this.productRate.three++;
        break;
      case 4:
        this.productRate.four++;
        break;
      case 5:
        this.productRate.five++;
        break;
      default:
        break;
    }
    this.service.updateProductRateDetails(this.productId,this.productRate).then(()=>{
      alert('Thank you for giving us you feedback')
      this.router.navigate(['../home'])
    }).catch(err=>alert(err.message))
  }
}
