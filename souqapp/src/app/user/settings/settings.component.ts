import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  closeResult = '';
  userInfo = {
    name: '',
    username: '',
    password: '',
    email: '',
    gender: '',
    nationality: '',
  }
  validation = [];
  updatedUserInfo = {}
  constructor(private service: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getSettings().subscribe(res => {
      // console.log(res.data());
      this.userInfo.username = res.data()['username'];
      this.userInfo.email = res.data()['email'];
      this.userInfo.password = res.data()['password'];
      res.data()['name'] ? this.userInfo.name = res.data()['name'] : this.userInfo.name = '';
      res.data()['gender'] ? this.userInfo.gender = res.data()['gender'] : this.userInfo.gender = '';
      res.data()['nationality'] ? this.userInfo.nationality = res.data()['nationality'] : this.userInfo.nationality = '';
      this.updatedUserInfo = { ...this.userInfo }

    })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  validate() {
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let flag = true;

    if (!this.userInfo.email.match(emailPattern)) {
      this.validation.push('Kindly enter a valid email address')
      flag = false;
    }
    if (flag)
      this.update();
    else
      console.log(this.validation)

  }
  update() {
    this.service.updateSettings(this.updatedUserInfo)
  }
}
