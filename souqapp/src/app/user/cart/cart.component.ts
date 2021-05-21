import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWishListItemData } from '@models/iproduct';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: IWishListItemData[];
  sub;
  cartItemsCount: number;
  cartTotalPrice: number;

  constructor(private user: UserService) {
    this.sub = this.user.getCartItems()
                        .subscribe(res => {
                          this.cartItems = res;
                          this.cartItemsCount = res.length;
                          this.cartTotalPrice = this.calculateTotalPrice();
                        });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  calculateTotalPrice(): number {
    return this.cartItems.map(item => {
      return item.cartQuantity * (item.price * (100 - item.discount) / 100);
    })
    .reduce((a, b) => a + b);
  }
}
