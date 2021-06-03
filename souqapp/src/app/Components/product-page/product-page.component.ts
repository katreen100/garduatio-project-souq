import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  parentID:string;

  // skuNumber:number;
  constructor(private param:ActivatedRoute) { }

  ngOnInit(): void {
    this.param.paramMap.subscribe(param=>{
      // this.skuNumber = parseInt(param.get('prdsku'))
      this.parentID = param.get('parentProductId');
      console.log(this.parentID)
    })
  }

}
