import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  userData = new  BehaviorSubject<any>('');
  currentUserData = this.userData.asObservable();

  langSource = new BehaviorSubject<any>('en');
  currentLang = this.langSource.asObservable();
  

  loginSource = new BehaviorSubject<any>(false);
  currentLogin = this.loginSource.asObservable();


  wishlistSource = new BehaviorSubject<any>(0);
  currentWishList = this.wishlistSource.asObservable();

  cartSource = new BehaviorSubject<any>(0);
  currentCart = this.cartSource.asObservable();


  orderCountSource = new BehaviorSubject<any>(0);
  currentOrderCountSource = this.orderCountSource.asObservable();

  orderPriceSource = new BehaviorSubject<any>(0);
  currentOrderPrice = this.orderPriceSource.asObservable();


  constructor() {
  }

  updateOrderCount(x: number) {
    this.orderCountSource.next(x);
  }

  updateOrderPrice(x: number) {
    this.orderPriceSource.next(x);
  }

  updateWishlist(x: number) {
    this.wishlistSource.next(x);
  }

  updateCart(x: number) {
    this.cartSource.next(x);
  }

  changeLang(lang) {
   //let currentlang= localStorage.getItem('currentLang')
    this.langSource.next(lang);
  }

  updateUserData(message) {
    this.userData.next(message);
  }

  toggleLogin(status: boolean) {
    this.loginSource.next(status);
  } 
}
