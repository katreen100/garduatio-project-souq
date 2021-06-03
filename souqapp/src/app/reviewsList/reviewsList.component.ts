import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-reviewsList',
  templateUrl: './reviewsList.component.html',
  styleUrls: ['./reviewsList.component.css'],
})
export class ReviewsListComponent implements OnInit {
  @Input() productID: string;
  reviews;
  rating;
  descr;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getReviews(this.productID).subscribe((res) => {
      console.log(res);
      this.reviews = res;
    });
  }
}
