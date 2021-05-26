import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchKeyWord: string;
  products;
  private Subscription: Subscription[] = []

  constructor(private route: ActivatedRoute, private service: ProductService) { }


  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe(param => {
      this.searchKeyWord = param.get('searchParam')

      console.log(this.products)
      this.service.getAllProducts().subscribe(res => {

        this.products = res.filter(product => product.categoryName == this.searchKeyWord || this.searchKeyWord == product.categoryName_ar || this.searchKeyWord == product.brandName || this.searchKeyWord == product.brandName_ar || this.searchKeyWord == product.name || this.searchKeyWord == product.name_ar)
        if (this.products.length ==0) {
          this.products = undefined
        }
      })
    })
    this.Subscription.push(sub)
  }
  ngOnDestroy(): void {
    this.Subscription.forEach(sub => {
      sub.unsubscribe()
    })
  }

}
