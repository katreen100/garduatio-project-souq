import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/old-services/category.service';
import { UserAuthService } from 'src/old-services/users-service.service';
import { MessageService } from 'src/services/message.service';

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

  wishlistItemCount: number = 0;
  cartItemCount: number = 0;

  constructor(private service: CategoryService,
              private router: Router,
              private userService: UserAuthService,
              private message: MessageService) { 
    this.userService.checkUser.subscribe(res=>{
      this.userStatus = res;
    })

    this.message.currentWishList.subscribe(res => { 
      // if (this.wishlistItemCount != 0 && res > 0) {
        this.wishlistItemCount += res
      // }
    });

    this.message.currentCart.subscribe(res => {
      // if (this.cartItemCount != 0 && res > 0) {
        this.cartItemCount += res
      // }
    });
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
}
