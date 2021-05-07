import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/old-services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() Toggled: boolean;
  categories: []
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(res => {
      this.categories = res
    })
  }
}
