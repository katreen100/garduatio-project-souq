import { Component, Input, OnInit } from '@angular/core';
import { IWishListItemID } from '@models/iproduct';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() productData;
  removed: boolean;
  productFullId: IWishListItemID;

  constructor(private user: UserService) {
    this.removed = false;
  }

  ngOnInit(): void {
    this.productFullId = {
      parentProductId: this.productData.parentProductId,
      variantId: this.productData.variantId
    };
  }

  addToCart(ev) {
    ev.preventDefault();
    this.removed = true;
    // Todo: add to cart function
    // remove from wishlist, then add to cart
    this.user.removeFromWishList(this.productFullId);
    this.user.addToCartIfNotExist(this.productFullId, this.productData);
  }

  removeFromWishList(ev) {
    ev.preventDefault();
    this.removed = true;
    this.user.removeFromWishList(this.productFullId);
  }
}
