import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/old-services/brand.service';
import { CategoryService } from 'src/old-services/category.service';
import { ProductService } from 'src/old-services/product.service';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css'],
})
export class FilterationComponent implements OnInit {
  searchCat: string;
  searchCondition: string;
  searchBrand: string;

  @Input() Cateogryoptions = [];
  cats = [];

  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: true,
  };

  Stars = [];
  star = [];

  Condition = [{ value: 1, label: 'New' }];
  cond = [...this.Condition];

  Brand = [];
  bran = [];
  products = [];
  filterProducts = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService
  ) {
    this.categoryService.getCategories().subscribe((res) => {
      this.Cateogryoptions = res;
      this.cats = [...this.Cateogryoptions];
    });
    this.brandService.getBrands().subscribe((res) => {
      this.Brand = res;
      this.bran = [...this.Brand];
    });

    this.productService.getProductRatingBreakdown(1).subscribe((res) => {
      this.Stars = res;
      this.star = [...this.Stars];
    });
    this.productService.getProduct(1).subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {
    this.productService.getProduct(1).subscribe((res) => {
      console.log(res);
    });
  }
  Search() {
    if (this.searchCat != '') {
      this.Cateogryoptions = this.cats.filter((res) => {
        console.log(res.categoryName);
        console.log(this.searchCat);
        return res.categoryName
          .toLocaleLowerCase()
          .startsWith(this.searchCat.toLocaleLowerCase());
      });
    } else {
      this.Cateogryoptions = [...this.cats];
    }
  }
  selectedCategory(item: string) {
    item = item.toLowerCase();
    this.router.navigate(['search-result/cat/', item]);
  }
  selectedBrand(item) {
    this.router.navigate(['search-result/brand/', item]);
  }
  priceFromTo(from, to) {
    console.log(from);
    console.log(to);
  }

  averageRating(averageRating, prdQuantity) {
    console.log(averageRating);
    console.log(prdQuantity);
  }
  SearchCondition() {
    if (this.searchCondition != '') {
      this.Condition = this.cond.filter((res) => {
        console.log(res.label);
        console.log(this.searchCondition);
        return res.label
          .toLocaleLowerCase()
          .startsWith(this.searchCondition.toLocaleLowerCase());
      });
    } else {
      this.Condition = [...this.cond];
    }
  }
  SelectedCondition(item) {
    console.log(item);
  }

  SearchBrand() {
    if (this.searchBrand != '') {
      this.Brand = this.bran.filter((res) => {
        console.log(res.brandName);
        console.log(this.searchBrand);
        return res.brandName
          .toLocaleLowerCase()
          .startsWith(this.searchBrand.toLocaleLowerCase());
      });
    } else {
      this.Brand = [...this.bran];
    }
  }
}
