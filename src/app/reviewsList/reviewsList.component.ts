import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewsList',
  templateUrl: './reviewsList.component.html',
  styleUrls: ['./reviewsList.component.css']
})
export class ReviewsListComponent implements OnInit {
  @Input() data: object[] = [];

  constructor() { }

  ngOnInit() {
  }

}
