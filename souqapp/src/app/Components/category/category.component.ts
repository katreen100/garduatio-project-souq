import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/services/product.service';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {
  private Subscription:Subscription[]=[]
  productList=[]
  CategoryName:string;
  constructor(private route:ActivatedRoute,private products:ProductService) { }
  
  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe(param=>{
      this.CategoryName = param.get('catName')
      this.products.getProductCards(this.CategoryName).subscribe(res=>{
        this.productList = res
        // console.log(this.productList)
      })
    })
    this.Subscription.push(sub)
  }
  ngOnDestroy(): void {
    if(this.Subscription.length>0)
      this.Subscription.forEach(sub=>sub.unsubscribe())
  }

}
