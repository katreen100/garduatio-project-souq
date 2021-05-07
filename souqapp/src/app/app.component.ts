import { Component } from '@angular/core';
import { ICategory } from '@models/icategory';
import { IProduct, IProductCard, IProductImages, IRatingDetails } from '@models/iproduct';
import { Observable } from 'rxjs';
// import { BrandService } from 'src/services/brand.service';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';
// import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'souq-app';
  products: Observable<IProduct[]>;
  specs;
  rating;
  descr;
  reviews;
  brands: Observable<ICategory>;
  categories: Observable<ICategory[]>;
  productCards: Observable<IProductCard[]>;
  ratingDetails: Observable<IRatingDetails>;
  product: Observable<IProduct>;
  productImages: Observable<IProductImages[]>;
  productWithImages: Observable<any>;

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
    this.categories = this.categoryService.getAllCategories();
    this.brands = this.categoryService.getBrandByCategory('EnXv47N2LkilhZDVvYva');
    this.products = this.productService.getAllProducts();
    this.productCards = this.productService.getAllProductCards();
    this.ratingDetails = this.productService.getProductRatingDetails('ed0f0600-854e-4ad4-b01d-bda780b2cdc0');
    this.productService.rateProduct('ed0f0600-854e-4ad4-b01d-bda780b2cdc0', 3, 16);
    this.product = this.productService.getProduct('dMYoWJYfbryLYRJ99mWv');
    this.productImages = this.productService.getProductImages('dMYoWJYfbryLYRJ99mWv');
    this.productWithImages = this.productService.getProductWithImages('dMYoWJYfbryLYRJ99mWv');
    
    
  //   this.productService.getProductReviews(1)
  //                       .subscribe(res => {
  //                         this.reviews = res;
  //                       })

  //   this.productService.getProductDescription(1)
  //                       .subscribe(res => {
  //                         this.descr = res;
  //                       })

  //   this.productService.getProductRatingBreakdown(1)
  //                       .subscribe(res => {
  //                         this.rating = res;
  //                       })

  //   this.productService.getProduct(1)
  //                       .subscribe(res => {
  //                         this.products = res;
  //                       });

  //   this.productService.getProductSpecifications(1)
  //                       .subscribe(res => {
  //                         this.specs = res;
  //                       });

  //   this.productService.getProductCards('watches')
  //                       .subscribe(res => {
  //                         this.productCards = res;
  //                       });

  //   this.brandService.getBrands(1)
  //                     .subscribe(res => {
  //                       this.brands = res;
  //                     });

  //   this.categoryService.getCategories()
  //                       .subscribe(res => this.categories = res);
  }
}
