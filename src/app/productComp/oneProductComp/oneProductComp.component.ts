import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap'

import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-oneProductComp',
  templateUrl: './oneProductComp.component.html',
  styleUrls: ['./oneProductComp.component.css'],
  providers: [NgbModalConfig, NgbModal,NgbDropdown]
})
export class OneProductCompComponent implements OnInit {
  product;
  


  constructor( config: NgbModalConfig, private modalService: NgbModal ,private prodservice:ProductService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  // getprodvarityKeys(varities){
  //       this.productvarityKey=Object.keys(varities)
  //       this.productvarityvalue=Object.values(varities)
  //       for(let i of this.productvarityvalue){
  //         console.log(i)
  //         this.productvarity2=i;
          
        
  //       }
       

        
  // }
  openlg(content) {
    
    this.modalService.open(content, { size: 'lg' });
  
  }
  calPricefterDiscount(){
    return this.product.price-(this.product.price*this.product.discount/100)

   }
  
  calcSavedMony():number{
    return this.product.price-this.calPricefterDiscount()
   }
  
  

  ngOnInit() {

  this.prodservice.getProduct(1).subscribe(res=>{
  

console.log(res)
  this.product=res[0]
console.log(this.product)








})

  }
}



