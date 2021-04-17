import { Component, Input, OnInit } from '@angular/core';

/**
 * Product Card
 * ==============
 * [ ] 1- Product Image
 * [x] 2- Discount (red label)
 * [ ] 3- Product varities
 * [x] 4- Product title
 * [ ] 5- Product Price after discount
 * [ ] 6- Product Price Before discount
 * [ ] 7- Product star rating
 * [ ] 8- Free shipping label
 * [ ] 9- Fullfilled by Souq label
 * [ ] 10- Add to cart Button
 */


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productData;
  product;

  constructor() {
  }

  ngOnInit(): void {
    this.product = this.productData;
  }

}
