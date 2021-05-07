import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/old-services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggled: boolean = true;
  @ViewChild('sidebarCollapse', {static: true}) sideBarCollapse: ElementRef;
  categories: []
  
  constructor(private service: CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(res => {
      this.categories = res
    })
  }
  toggleClass(): void{
    this.isToggled = !this.isToggled;
  }
  scrollHandler(event){
    console.log(event)
    console.log("hello")
  }
  show(catName){
    // console.log(catName)
  }
  hide(){
    
  }
  search(search){
    this.router.navigate(['search-result/',search])
  }

}
