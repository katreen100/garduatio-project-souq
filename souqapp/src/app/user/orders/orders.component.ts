import { Orders } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;
  wishlist;

  constructor(private userServic :UserService) { 
   
  
    
  }

  ngOnInit(): void {
    // this.userServic.getWishListIds().subscribe(res=>this.orders=res)
    // console.log(this.orders)
    this.wishlist= this.userServic.getWishListIds()
      
    this.orders=this.userServic.getOrders()
    console.log(this.orders)
  
  }
  
}
