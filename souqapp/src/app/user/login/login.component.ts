import { Component, OnInit } from '@angular/core';
import { IuserLogin } from 'src/app/view model/iuser-login';
import { UsersService } from 'src/old-services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin : IuserLogin;
  constructor( private Auth : UsersService) {
    this.userLogin = {};
   }

  ngOnInit(): void {
  }
  login()
  {
    // this.Auth.SignIn(this.userLogin.email, this.userLogin.password).then(res=>{
    //   console.log(res);
      
    // }).catch(err=>{console.log("error")});
    this.Auth.SignIn(this.userLogin.email,this.userLogin.password)
  }

}
