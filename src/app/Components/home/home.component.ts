import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cateogryoptions = [];
  cats = [];

  constructor(private catService : CategoryService) {
    this.catService.getCategories()
      .subscribe(res => {
        this.Cateogryoptions = res;
        this.cats = [...this.Cateogryoptions]
        console.log(this.cats);
      });
   }

  ngOnInit(): void {
  }

}
