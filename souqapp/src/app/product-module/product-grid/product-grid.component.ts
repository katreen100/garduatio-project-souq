import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/old-services/product.service';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productCard$: Observable<IProductCard[]>;

  constructor(private productService: ProductService) {
    this.productCard$ =  this.productService.getAllProductCards();
  }

  ngOnInit(): void {
  }

}
