import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categories:[]
  constructor(private service:CategoryService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(res=>{
      this.categories =res
      console.log(this.categories)
    })
  }

}
