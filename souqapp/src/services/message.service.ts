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


  constructor() {
  }

  changeLang(lang) {
   //let currentlang= localStorage.getItem('currentLang')
    this.langSource.next(lang);
  }

  updateUserData(message) {
    this.userData.next(message);
  }
}
