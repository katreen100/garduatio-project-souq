import { ProductService } from 'src/old-services/product.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/old-services/users-service.service';
import { IUserRegister } from 'src/app/view model/iuser-register';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
    userRegister;
    userInfo:IUserRegister;
    constructor( private Auth: UsersService) {
        this.userInfo = {
            email: '',
            username:'',
            password:'',
        };
    }

    ngOnInit() {
    }

    register() {
        this.Auth.signUp(this.userInfo).then(res => {
           
        }).catch(err => { console.log('error', err); });
    }

}
