import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/view model/productDetails';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/services/product.service'


@Component({
  selector: 'app-productgallary',
  templateUrl: './productgallary.component.html',
  styleUrls: ['./productgallary.component.css'],
  providers: [NgbModalConfig, NgbModal,NgbCarouselConfig]
})
export class ProductgallaryComponent implements OnInit {
  product;
  images:string[]=[]
  productvariant: import("e:/frontend ITI/lastfolderfinlproject/souq-app/souqapp/src/app/models/iproduct").IProductVariant;
  imagesOfMainvariant: any;
  //imgs:string[];
  constructor(config: NgbModalConfig,configc: NgbCarouselConfig, private modalService: NgbModal,private prodservice:ProductService) { 
    
    config.backdrop = 'static';
    config.keyboard = false;
    configc.interval = 10000;
    configc.wrap = true;
    configc.keyboard = true;
    configc.pauseOnHover = false;
  }
  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
    this.prodservice.getFullProduct ("ed0f0600-854e-4ad4-b01d-bda780b2cdc0","Z9yl9x6K6ypb6Q18ow0R") .subscribe(res=>{
      console.log(res);
      this.product=res[0];
      this.images.push(this.product.mainImage)
      this.imagesOfMainvariant=res[2]
      console.log(this.imagesOfMainvariant)
      for (let i=0;i<this.imagesOfMainvariant.length;i++)
      {
  
        let img;
       img=this.imagesOfMainvariant[i].regular;
        console.log(img)
        this.images.push(img)

      }
  
    
      console.log(this.images)
      
       
    })
  }
}
