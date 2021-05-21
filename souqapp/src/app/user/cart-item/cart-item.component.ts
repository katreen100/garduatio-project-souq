import { Component, Input, OnInit } from '@angular/core';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItemData: IWishListItemData;
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
}
