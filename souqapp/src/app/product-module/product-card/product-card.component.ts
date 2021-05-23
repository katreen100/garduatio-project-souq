import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { InView } from "@shared/pipes/in-view";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IWishListItemID } from '@models/iproduct';
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
  styleUrls: ['./product-card.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProductCardComponent implements OnInit {
  @Input() productData;
  product;
  fullproductId:IWishListItemID;
constructor(private router:Router,config: NgbModalConfig,
  private modalService: NgbModal,) {
  }
  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  ngOnInit(): void {
    this.product = this.productData;
    
  }
  productDetails(parentProductId, variantId){
    this.router.navigate(['/productPage/',parentProductId,variantId])
  }

}
