import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { InView } from "@shared/pipes/in-view";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';
import { UserService } from 'src/services/user.service';
import { ProductService } from 'src/services/product.service';
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
  
  // this property as input 
  wishListItem: IWishListItemData;
  productFullId: {
    parentProductId:string;
    variantId:string;
  }
  variation;
  productid: any;
constructor(private router:Router,config: NgbModalConfig,
  private modalService: NgbModal, private userService: UserService,private productservice:ProductService) {
  }
  openxl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  ngOnInit(): void {
    this.product = this.productData;
    this.productid=this.product.id;
    console.log(this.productid)
  }
  productDetails(parentProductId, variantId='mainVariant'){
    this.router.navigate(['/productPage/',parentProductId, variantId])
  }
  addToCart(parentId) {
    console.log(parentId)
   this. productFullId= {
      parentProductId:parentId,
      variantId: "mainVariant",
    }
    //this.variation=this.productservice.getMainVariant(parentId)
   this.productservice.getMainVariant(parentId).subscribe(res=>{
     this.variation = res;
     this.wishListItem = {
       // from Parent Product
       parentProductId: this.productFullId.parentProductId,
       variantId: 'mainVariant',
       name: this.product.name,
       price: this.product.price,
       discount: this.product.discount,
       description: this.product.description,
       // from Product variation subcollection
        quantity: this.variation.quantity,
       mainImage: this.variation.mainImage,
       variation: this.variation.variation,
       createdAt: new Date(),
       updatedAt: new Date(),
       cartQuantity: 1
     }

     this.userService.addToCartIfNotExist(this.productFullId, this.wishListItem)
    })
    //   console.log(this.variation)
  //    console.log(this.wishListItem)
   // this.userService.addToCartIfNotExist(this.productFullId, this.wishListItem)
  }
}
