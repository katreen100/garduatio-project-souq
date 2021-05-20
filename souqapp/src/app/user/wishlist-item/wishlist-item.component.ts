import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() productData;

  constructor(private productService: ProductService) {
    console.log(this.productData);
  }

  ngOnInit(): void {
  }
}
