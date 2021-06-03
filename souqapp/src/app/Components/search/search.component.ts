import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchKeyWord: string;
  type: string;
  products;
  private Subscription: Subscription[] = [];

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe((param) => {
      console.log(param);
      this.searchKeyWord = param.get('searchParam');
      this.type = param.get('type');
      this.products = undefined;
      if (this.type == 'products') {
        if (this.searchKeyWord == 'all') {
          this.service
            .getAllProducts()
            .subscribe((res) => (this.products = res));
        } else {
          this.service
            .getSingleProduct(this.searchKeyWord)
            .subscribe((res) => (this.products = res));
        }
      }
      if (this.type == 'cat') {
        this.service
          .getProductsByCat(this.searchKeyWord)
          .subscribe((res) => (this.products = res));
      }
      if (this.type == 'brand') {
        console.log(this.searchKeyWord);
        this.service
          .getProductsByBrand(this.searchKeyWord)
          .subscribe((res) => (this.products = res));
      }
    });
    this.Subscription.push(sub);
  }
  ngOnDestroy(): void {
    this.Subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
