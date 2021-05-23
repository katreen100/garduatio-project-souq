import { ProductService } from 'src/old-services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/old-services/users-service.service';
import { IUserRegister } from 'src/app/view model/iuser-register';
@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']

})

export class RegisterFormComponent implements OnInit {
    userInfo: IUserRegister;
    passwordConfirmation = '';
    validation = [];
    constructor(private Auth: UserAuthService) {
        this.userInfo = {
            email: '',
            username: '',
            password: '',
        };
    }

    ngOnInit() {
    }
    validate() {
        this.validation = [];
        let flag = true;

        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (this.userInfo.username === '') {
            this.validation.push('User name is required')
            flag = false;
        }
        if (!this.userInfo.email.match(emailPattern)) {
            this.validation.push('Kindly enter a valid email address')
            flag = false;
        }
        if (this.userInfo.password == '') {
            this.validation.push('Kindly enter Password')
            flag = false;
        }
        else if (this.userInfo.password.length < 6) {
            this.validation.push('Password should be at least 6 characters')
            flag = false;
        }        
        if (this.passwordConfirmation !== this.userInfo.password) {
            this.validation.push('Passwords are not Matched')
            flag = false;
        }
        if (flag) {
            this.register()
        }
    }
    register() {
        this.Auth.signUp(this.userInfo).then(res => {
        }).catch(err => { console.log('error', err); });
    }

}
