import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist;
  products;
  ids

  constructor(private user: UserService, private prod: ProductService) {
    // user.getWishList().subscribe(res => {
    //   this.products = prod.getArrayOfProducts(res);
    // }
      // );
    this.wishlist = user.getWishListIds();
    // this.products = user.getWishListProducts();
    // this.products = prod.getArrayOfProducts(this.ids);
    this.products = prod.getProductWithVariant({
    parentProductId: "ed0f0600-854e-4ad4-b01d-bda780b2cdc0",
    variantId: "mainVariant"
  });
  }

  ngOnInit(): void {
  }

}
