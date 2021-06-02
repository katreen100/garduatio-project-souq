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


  constructor() {
  }

  changeLang(lang) {
    this.langSource.next(lang);
  }

  updateUserData(message) {
    this.userData.next(message);
  }

  toggleLogin(status: boolean) {
    this.loginSource.next(status);
  } 
}
