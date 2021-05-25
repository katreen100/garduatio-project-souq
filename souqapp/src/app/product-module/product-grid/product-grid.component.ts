import { Component, OnInit } from '@angular/core';
import { IParentProduct } from '@models/iproduct';
import { Observable } from 'rxjs';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productCard$: Observable<IParentProduct[]>;

  constructor(private productService: ProductService) {
    this.productCard$ =  this.productService.getAllProducts();
   this.productService.getAllProducts().subscribe(res=>console.log(res))
  }

  ngOnInit(): void {
  }

}
