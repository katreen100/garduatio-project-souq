import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-oneProductComp',
  templateUrl: './oneProductComp.component.html',
  styleUrls: ['./oneProductComp.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbDropdown],
})
export class OneProductCompComponent implements OnInit {
  product;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private prodservice: ProductService
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
  calcSavedMony(): number {
    return this.product.price - this.calPricefterDiscount();
  }

  ngOnInit() {
    let parentid = ' ed0f0600-854e-4ad4-b01d-bda780b2cdc0';
    this.prodservice
      .getFullProduct(
        'ed0f0600-854e-4ad4-b01d-bda780b2cdc0',
        'Z9yl9x6K6ypb6Q18ow0R'
      )
      .subscribe((res) => {
        console.log(res);
        this.product = res[0];
        console.log(this.product);
      });
  }
}
