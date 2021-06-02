import { Component, OnInit } from '@angular/core';
import { IuserLogin } from 'src/app/view model/iuser-login';
import { UserAuthService } from 'src/old-services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: IuserLogin;
  validation = [];
  caretFlag: boolean;
  constructor(private Auth: UserAuthService) {
    this.userLogin = {
      email: '',
      password: '',
    };
    this.caretFlag = false
  }

  ngOnInit(): void {
  }

  validate() {
    this.validation = [];
    let flag = true;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!this.userLogin.email.match(emailPattern)) {
      this.validation.push('Kindly enter a valid email address')
      flag = false;
    }
    if (this.userLogin.password == '') {
      this.validation.push('Kindly enter Password')
      flag = false;
    }
    else if (this.userLogin.password.length < 6) {
      this.validation.push('Password should be at least 6 characters')
      flag = false;
    }

    if (flag) {
      this.login()
    }
  }
  login() {
    this.Auth.SignIn(this.userLogin.email, this.userLogin.password).then(res => {
      if (res != undefined) {
        this.validation.push(res.message)
      }
    })
  }
  toggle() {
    this.caretFlag = !this.caretFlag;
  }

}
