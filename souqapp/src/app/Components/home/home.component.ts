import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/old-services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cateogryoptions = [];
  cats = [];
  currentLang: string;

  constructor(private catService : CategoryService,
  ){}
  
  ngOnInit(): void {
  }

}
