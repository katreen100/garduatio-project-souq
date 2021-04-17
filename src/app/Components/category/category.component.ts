import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {
  private Subscription:Subscription[]=[]
  CategoryName:string;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe(param=>{
      this.CategoryName = param.get('catName')
    })
    this.Subscription.push(sub)
  }
  ngOnDestroy(): void {
    if(this.Subscription.length>0)
      this.Subscription.forEach(sub=>sub.unsubscribe())
  }

}
