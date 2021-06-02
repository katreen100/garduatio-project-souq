import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/old-services/category.service';
import { UserAuthService } from 'src/old-services/users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggled: boolean = true;
  @ViewChild('sidebarCollapse', { static: true }) sideBarCollapse: ElementRef;
  categories: []
  userStatus:boolean;

  constructor(private service: CategoryService, private router: Router, private userService: UserAuthService) { 
    this.userService.checkUser.subscribe(res=>{
      this.userStatus = res;
    })
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(res => {
      this.categories = res
    })
  }
  toggleClass(): void {
    this.isToggled = !this.isToggled;
  }
  scrollHandler(event) {
    console.log(event)
    console.log("hello")
  }
  search(search) {
    this.router.navigate(['search-result/', search])
  }
  signOut(){
    this.userService.SignOut();
  }
  show(x:string){
    console.log('showed',x)
  }
  hide(x:string){
    console.log('hidden',x)
  }
}
