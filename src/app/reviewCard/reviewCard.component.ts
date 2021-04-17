import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviewCard',
  templateUrl: './reviewCard.component.html',
  styleUrls: ['./reviewCard.component.css']
})
export class ReviewCardComponent implements OnInit {
  @Input() ratingValue: number = 0;
  @Input() userName: string ='';
  @Input() reviewDate: Date;
  @Input() reviewText: string ='';
  @Input() positive: string ='';
  @Input() negative: string ='';
  @Input() isPurchasedOnSouq: boolean = false;
  isHelpful: boolean = true;
  isHelpfulSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleIsHelpful() {
    this.isHelpful = !this.isHelpful;
    this.isHelpfulSelected = true;
  }

}
