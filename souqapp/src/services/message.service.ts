import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  userData = new  BehaviorSubject<any>('');
  currentUserData = this.userData.asObservable();


  constructor() {
  }

  updateUserData(message) {
    this.userData.next(message);
  }
}
