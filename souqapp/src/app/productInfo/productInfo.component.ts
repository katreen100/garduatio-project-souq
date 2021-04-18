import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productInfo',
  templateUrl: './productInfo.component.html',
  styleUrls: ['./productInfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  data; 

  constructor(private productService: ProductService) {
    this.productService.getProductDescription(1)
      .subscribe(res => {
        this.data = res;
      })
  }

  ngOnInit() {
  }

}
