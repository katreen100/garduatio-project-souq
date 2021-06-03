
  
import { Component, OnInit, Directive } from '@angular/core';
import { IParentProduct } from '@models/iproduct';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Observable } from 'rxjs';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-grid',
  //  directives: [InfiniteScrollDirective],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productCard$;
  cloumnShow =true;
  imgclass;
  productDetailsClass;
  limitToshow= 12;
  constructor(private productService: ProductService) {
     this.productCard$=[]
   
  }
 
  // onScroll(){ 
  //   this.productService.getAllProducts(this.limitToshow,this.productCard$[length-1]).subscribe(res=>{
  //     this.productCard$ = [...this.productCard$,...res]
  //   })
  // }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res=>{this.productCard$=res})
    this.imgclass='product-show text-center  col-md-12'
     this.productDetailsClass="product-details  py-3 col-md-12 "
  }
   changeToCloumn(){
     this.cloumnShow=true
     this.imgclass='product-show text-center  col-md-12'
     this.productDetailsClass="product-details  py-3 col-md-12 "

  }
  changeToRow(){
    this.cloumnShow=false;
    this.imgclass='product-show text-center  col-sm-4';
    this.productDetailsClass="product-details  py-3 col-sm-8 "
  }
}
