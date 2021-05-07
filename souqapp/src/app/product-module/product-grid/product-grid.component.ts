import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/old-services/product.service';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productCards: IProductCard[];

  constructor(private productService: ProductService) {
    this.productService.getAllProductCards()
      .subscribe(res => {
        this.productCards = res;
        console.table(res);
      });
  }

  ngOnInit(): void {
  }

}
