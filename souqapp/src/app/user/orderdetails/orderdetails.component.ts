import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
orderItems;
  wishlist: any;
  constructor( private user: UserService) { }

  ngOnInit() {
    this.orderItems=this.user.getOrdrsItem()
    console.log(this.orderItems)
    // this.user.getOrdrsItem().subscribe(val => console.log(val));
    // this.wishlist=this.user.getOrders()
    // console.log(this.wishlist)
  }

}
