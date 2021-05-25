import { LabelType } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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
  @Input() productIdasInput;
  heartColor: boolean;
  product;
  variation;
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
    this.productRate = {
      averageRating:0,
      one:0,
      two:0,
      three:0,
      four:0,
      five:0
    }
    this.product={
      id:0,
      price:{
        discount : 0,
      },
      discount: 0,
      productprop:{},
      allVariations:{},
      features:[]

    }
    // this.product={
    //   parentId:           " ";
    // condition_ar:       " ";
    // features:           [" " ];
    // eligibleForCoupons: boolean;
    // updatedAt:          ITimestamp;
    // features_ar:        string[];
    // categoryName_ar:    string;
    // categoryName:       string;
    // mainImage:          string;
    // allVariations_ar:   { };
    // condition:          string;
    // description_ar:     string;
    // allVariations:      { };
    // name:               string;
    // averageRating:      number;
    // brandName:          string;
    // price:              number;
    // // shipping_ar:        string;
    // sellerNotes_ar:     string[];
    // mainVariant:        string;
    // brandName_ar:       string;
    // discount:           number;
    // // shipping:           string;
    // name_ar:            string;
    // createdAt:          ITimestamp;
    // tax:                number;
    // variants:           string[];
    // sellerNotes:        string[];
    // description:        string;
    // freeShipping:       boolean;

    // }
  }

  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }



  addToWishList() { ///this.heartColor == true
    if (!this.heartColor) {
      this.userService.addToWishListIfNotExist(this.productFullId, this.wishListItem)
      this.heartColor = true
    }
    else {
      this.userService.removeFromWishList(this.productFullId)
      this.heartColor = false
    }
   
  }

 

  ngOnInit() {
    this.productFullId = {
      parentProductId: this.productIdasInput,
      variantId: "mainVariant"
    };
    console.log(this.productFullId)
    this.userService.checkIfToWishListIfNotExist(this.productFullId)
        .subscribe(res => this.heartColor = res);

    this.prodservice.getProductWithVariant(this.productFullId)
        .subscribe((res) => {
              this.product = res[0];
              this.variation = res[1];
              this.wishListItem = {
                // from Parent Product
                parentProductId: this.productFullId.parentProductId,
                variantId: this.productFullId.variantId,
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
    });

    //getaverage rate
    this.prodservice.getProductRatingDetails(this.productFullId.parentProductId)
        .subscribe(res => this.productRate = res);
  }


  addToCart() {
    this.userService.addToCartIfNotExist(this.productFullId, this.wishListItem)
  }
}



