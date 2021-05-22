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

  constructor(private user: UserService ) {
    this.sub = this.user.getCartItems()
                        .subscribe(res => {
                          this.cartItems = res;
                          this.cartItemsCount = res.length;
                          this.cartTotalPrice = this.calculateTotalPrice();
                        });
                        this.checkOut()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkOut(){
    let date = new Date();
    let deliveryDate=date.setDate(date.getDate() + 3);
    let orderMetaData={
      createdAt:date,
      updatedAt:date,
      total:this.cartTotalPrice,
      itemCount:this.cartItemsCount,
      status:'ready for shiping',
      deliveryDate:deliveryDate,
      // username     
    }
    this.user.proceedToCheckout(this.cartItems,orderMetaData)


  }

  calculateTotalPrice(): number {
    console.log(this.cartItems);
    return this.cartItems.map(item => {
      return item.cartQuantity * (item.price * (100 - item.discount) / 100);
    })
    .reduce((a, b) => a + b);
  }

  setCartQuantity(ev, index: number): void {
      this.cartItems[index].cartQuantity = ev[0];
      this.cartTotalPrice = this.calculateTotalPrice();
      this.cartItemsCount += ev[1];
  }
}
