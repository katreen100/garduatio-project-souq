import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/view model/productDetails';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-productgallary',
  templateUrl: './productgallary.component.html',
  styleUrls: ['./productgallary.component.css'],
  providers: [NgbModalConfig, NgbModal,NgbCarouselConfig]
})
export class ProductgallaryComponent implements OnInit {
  product;
  images=["../../../assets/watch"]
  imgs:string[];
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
getImges(obj){
  this.imgs=this.product.productVarities.size[0].images
}
  ngOnInit() {
    this.prodservice.getProduct(1).subscribe(res=>{
      console.log(res);
      this.product=res[0];
    this.getImges(this.product);
      console.log(this.product);
      console.log(this.imgs)
    })
    }
}
