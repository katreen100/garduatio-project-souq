import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit,OnDestroy {
  private Subscription:Subscription[]=[]
  brandName:string;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe(param=>{
      this.brandName = param.get('brandName')
    })
    this.Subscription.push(sub)
  }
  ngOnDestroy(): void {
    if(this.Subscription.length>0)
      this.Subscription.forEach(sub=>sub.unsubscribe())
  }

}
