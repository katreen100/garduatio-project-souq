import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItemsCount: number;
  cartTotalPrice: number;

  constructor(private message: MessageService) {
    this.message.currentOrderCountSource.subscribe(res => this.cartItemsCount = res);
    this.message.currentOrderPrice.subscribe(res => this.cartTotalPrice = res);
  }

  ngOnInit(): void {
  }

  confirmOrder(): void {

  }
}
