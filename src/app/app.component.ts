import { Component } from '@angular/core';
import { BrandService } from 'src/services/brand.service';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'souq-app';
  productCards: IProductCard[];
  products;
  specs;
  rating;
  descr;
  reviews;
  brands;
  categories;

  constructor(private productService: ProductService,
              // private brandService: BrandService,
              private categoryService: CategoryService) {
    this.productService.getProductReviews(1)
                        .subscribe(res => {
                          this.reviews = res;
                        })

    this.productService.getProductDescription(1)
                        .subscribe(res => {
                          this.descr = res;
                        })

    this.productService.getProductRatingBreakdown(1)
                        .subscribe(res => {
                          this.rating = res;
                        })

    this.productService.getProduct(1)
                        .subscribe(res => {
                          this.products = res;
                        });

    this.productService.getProductSpecifications(1)
                        .subscribe(res => {
                          this.specs = res;
                        });

    this.productService.getProductCards('watches')
                        // .subscribe(console.table);
                        .subscribe(res => {
                          this.productCards = res;
                        });

    // this.brandService.getBrands()
    //                   .subscribe(res => this.brands = res);

    this.categoryService.getCategories()
                        .subscribe(res => this.categories = res);
  }
}
