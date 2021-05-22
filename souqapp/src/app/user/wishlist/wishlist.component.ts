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
    this.wishlist = user.getWishListItems();
  }

  ngOnInit(): void {
  }

}
