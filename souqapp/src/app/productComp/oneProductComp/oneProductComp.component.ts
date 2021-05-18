import { LabelType } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IWishListItemID } from '@models/iproduct';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { IRate } from 'src/app/Viewmodels/Rate/irate';

import { ProductService } from 'src/services/product.service';
import{UserService} from 'src/services/user.service'
@Component({
  selector: 'app-oneProductComp',
  templateUrl: './oneProductComp.component.html',
  styleUrls: ['./oneProductComp.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbDropdown],
})
export class OneProductCompComponent implements OnInit {
  heartColor:boolean;
  product;
  ids: IWishListItemID = {
    parentProductId: 'ed0f0600-854e-4ad4-b01d-bda780b2cdc0',
    variantId: 'mainVariant',
  };
  subscriptions: any;
  productRate: IRate;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private prodservice: ProductService,
    private userService: UserService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  calPricefterDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
addToWishList(){
  console.log('test')
  this.userService.checkIfToWishListIfNotExist(this.ids).subscribe(res=>{
      
    this.heartColor=res
  })
  if(!this.heartColor){
    console.log("test add")
  
  this.userService.addToWishListIfNotExist(this.ids)
  this.heartColor=true
  
  }else{
// this.heartColor=false;
    this.userService.removeFromWishList(this.ids)
  }
  
  
}
  calcSavedMony(): number {
    return this.product.price - this.calPricefterDiscount();
  }

  ngOnInit() {
   
    this.userService.checkIfToWishListIfNotExist(this.ids).subscribe(res=>{
      
      this.heartColor=res
    })
    this.prodservice.getProductWithVariant(this.ids).subscribe((res) => {
      console.log(res);
      this.product = res[0];
      console.log(this.product);
    });
  
    //getaverage rate
   this.prodservice.getProductRatingDetails(this.ids.parentProductId).subscribe(res => {
      console.log(res)
      this.productRate = res;
    console.log(this.productRate)
    })
  


  }
  
}



