import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/old-services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cateogryoptions = [];
  cats = [];

  constructor(private catService : CategoryService,
  ){}
  
  ngOnInit(): void {
  }

}
