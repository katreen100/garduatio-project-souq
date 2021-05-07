import { ProductService } from 'src/old-services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewsList',
  templateUrl: './reviewsList.component.html',
  styleUrls: ['./reviewsList.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviews;
  rating;
  descr;

  constructor(private productService: ProductService) {
    this.productService.getProductReviews(1)
      .subscribe(res => {
        this.reviews = res[0];
        console.table(this.reviews);
        console.log(...this.reviews);
    });

    // this.data = [
    //   {
    //     ratingValue: 4,
    //     userName: 'Ahmed',
    //     reviewDate: new Date(),
    //     reviewText: 'Great product, but the battery is overheating sometimes!',
    //     isPurchasedOnSouq: true,
    //   },
    //   {
    //     ratingValue: 3,
    //     userName: 'Shehab',
    //     reviewDate: new Date(),
    //     reviewText: 'Poor quality .. but it works',
    //     isPurchasedOnSouq: true,
    //   },
    //   {
    //     ratingValue: 5,
    //     userName: 'Omar',
    //     reviewDate: new Date(),
    //     reviewText: 'Great product, but the battery is overheating sometimes!',
    //     isPurchasedOnSouq: false,
    //   }
    // ];
   }

  ngOnInit() {
  }

}
