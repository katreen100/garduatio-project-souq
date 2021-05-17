import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IWishListItemID } from '@models/iproduct';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit, OnDestroy {
  @Input() parentProductId;
  @Input() variantId;
  product;
  subscription;

  constructor(private productService: ProductService) {
    // this.product = productService.getProductWithVariant(this.listItemId);
  }

  ngOnInit(): void {
    this.subscription = this.productService.getProductWithVariant({
      parentProductId: this.parentProductId,
      variantId: this.variantId
    }).subscribe(res => this.product = res);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
