import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/old-services/users-service.service';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPWComponent implements OnInit {
  email: string;
  validation = [];
  caretFlag: boolean;
  sent:boolean = false;
  isLoading: boolean = false
  constructor(private Auth: UserAuthService) {
    this.email=''
    this.caretFlag = false
  }

  ngOnInit(): void {
  }
  validate() {
    this.validation = [];
    let flag = true;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!this.email.match(emailPattern)) {
      this.validation.push('Kindly enter a valid email address')
      flag = false;
    }

    if (flag) {
      this.reset()
      this.isLoading = true
    }

  }
  changeStatus(){
    this.sent = false;
  }
  reset(){
    this.Auth.Reset(this.email).then(()=>{
      this.sent = true
      this.isLoading = false;
    }).catch(err=>{
      this.validation.push(err.message)
      this.isLoading = false;
    })
  }

}
