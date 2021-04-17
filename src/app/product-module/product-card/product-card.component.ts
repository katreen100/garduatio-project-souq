import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  product;

  constructor(private router:Router) {
    this.product = {
      mainImage: '../../../../assets/watch',
      discount: 15,
      productVarieties: ['small', 'medium', 'large'],
      title: "hand watch",
      fullfilledBySouq: true,
      price: {
        currentPrice: 500,
        previousPrices: {
          timestamp: 400,
          timestamp2: 300,
          timestamp3: 600,
        }
      },
      sku:2,
      ratings: {
        five_stars: ['user_id', 'user_2_id'],
        four_stars: ['user_id', 'user_2_id'],
        three_stars: ['user_id', 'user_2_id'],
        two_stars: ['user_id', 'user_2_id'],
        one_stars: ['user_id', 'user_2_id'],
        averageRating: 4.5 // calculated field
      },
      shipping: 'free',
    }
  }

  ngOnInit(): void {
  }
  productDetails(skuNumber){
    this.router.navigate(['/productPage/',skuNumber])
  }

}
