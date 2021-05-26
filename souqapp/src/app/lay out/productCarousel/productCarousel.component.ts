import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productCarousel',
  templateUrl: './productCarousel.component.html',
  styleUrls: ['./productCarousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  productCard$: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productCard$ =  this.productService.getAllProductsforHome();
  }

}
