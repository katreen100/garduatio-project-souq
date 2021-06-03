import { Component, OnInit, Input } from '@angular/core';
import { IParentProduct } from '@models/iproduct';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productInfo',
  templateUrl: './productInfo.component.html',
  styleUrls: ['./productInfo.component.css'],
})
export class ProductInfoComponent implements OnInit {
  data;
  productFullId;
  @Input() ParentID: string;
  product:IParentProduct;
  feature: string[];
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productFullId = {
      parentProductId: this.ParentID,
      variantId: 'mainVariant',
    };
    this.productService
      .getProductWithVariant(this.productFullId)
      .subscribe((res) => {
        this.product=res[0];
        this.data=this.product.description;
         this.feature=this.product.features
        console.log(this.data)
        
      });
  }
}
