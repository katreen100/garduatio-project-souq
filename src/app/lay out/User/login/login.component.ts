import { Component, OnInit } from '@angular/core';
import { IuserLogin } from 'src/app/view model/iuser-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin : IuserLogin;
  constructor() {
    this.userLogin = {};
   }

  ngOnInit(): void {
  }
  login()
  {
    alert(`Welcome ... ${this.userLogin.email}`);
  }

}
