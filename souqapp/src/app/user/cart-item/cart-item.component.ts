import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItemData: IWishListItemData;
  @Output() QuantityChange = new EventEmitter<number[]>();
  // @Output() ItemsChange = new EventEmitter<number>();
  removed: boolean;
  productFullId: IWishListItemID;

  constructor(private user: UserService) {
    this.removed = false;
  }

  ngOnInit(): void {
    this.productFullId = {
      parentProductId: this.cartItemData.parentProductId,
      variantId: this.cartItemData.variantId
    };
  }

  onQuantityChange(ev) {
    this.QuantityChange.emit([this.cartItemData.cartQuantity, 0]);
  }


  saveToWishList(ev) {
    this.removed = true;
    // Todo: remove from cart + add to wishlist
    this.user.addToWishListIfNotExist(this.productFullId, this.cartItemData)
    this.user.removeFromCart(this.productFullId);
    this.QuantityChange.emit([0, -1]);
  }

  removeFromCart(ev) {
    this.removed = true;
    this.user.removeFromCart(this.productFullId);
    this.QuantityChange.emit([0, -1]);
  }
}