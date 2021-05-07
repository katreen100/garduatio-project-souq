import { ProductService } from 'src/old-services/product.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/old-services/users-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
    userRegister;

    constructor( private Auth: UsersService) {
        this.userRegister = {};
    }

    ngOnInit() {
    }

    register() {
        debugger;
        this.Auth.signUp(this.userRegister?.email, this.userRegister?.password).then(res => {
            console.log(res);
        }).catch(err => { console.log('error', err); });
    }

}
