import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'souq-app';
  reviewCardData = {
    ratingValue: 4,
    userName: 'Ahmed',
    reviewDate: new Date(),
    reviewText: 'Great product, but the battery is overheating sometimes!',
    isPurchasedOnSouq: true,
  };
}
