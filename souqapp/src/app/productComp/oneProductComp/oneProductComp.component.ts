import { LabelType } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { IRate } from 'src/app/Viewmodels/Rate/irate';

import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service'
@Component({
  selector: 'app-oneProductComp',
  templateUrl: './oneProductComp.component.html',
  styleUrls: ['./oneProductComp.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbDropdown],
})
export class OneProductCompComponent implements OnInit {
  heartColor: boolean;
  product;
  subscriptions: any;
  productRate: IRate;
  wishListItem: IWishListItemData;
  productFullId: IWishListItemID;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private prodservice: ProductService,
    private userService: UserService,
    activeRoute: ActivatedRoute
  )
  {
    config.backdrop = 'static';
    config.keyboard = false;
    this.productFullId = {
      parentProductId: activeRoute.snapshot.params['parentProductId'],
      variantId: activeRoute.snapshot.params['variantId']
    };
  }

  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  calPricefterDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  addToWishList() {
    this.userService.checkIfToWishListIfNotExist(this.productFullId).subscribe(res => {
      this.heartColor = res
    })

    if (!this.heartColor) {
      this.userService.addToWishListIfNotExist(this.productFullId)
      this.heartColor = true
    }
    else {
      // this.heartColor=false;
      this.userService.removeFromWishList(this.productFullId)
    }
  }

  calcSavedMony(): number {
    return this.product.price - this.calPricefterDiscount();
  }

  ngOnInit() {
    console.log('oooooooooooooooooon innnnnnnnnnnnnnnnnnnnnnnnnnnit');
    this.userService.checkIfToWishListIfNotExist(this.productFullId)
        .subscribe(res => this.heartColor = res);

    this.prodservice.getProductWithVariant(this.productFullId)
        .subscribe((res) => {
              this.product = res[0];
    });

    //getaverage rate
    this.prodservice.getProductRatingDetails(this.productFullId.parentProductId)
        .subscribe(res => this.productRate = res);


    // this.wishListItem = {
    //   parentProductId: this.product.parentProductId,
    //   variantId: this.product,
    //   name: this.product.name,
    //   mainImage: this.product.mainImage,
    //   price: this.product.price,
    //   discount: this.product.discount
    // }
  }

}



