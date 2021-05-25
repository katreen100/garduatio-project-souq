import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userData;

  constructor(private message: MessageService) {
    this.message.currentUserData.subscribe(res => this.userData = res);
  }

  ngOnInit(): void {
  }

}
