import { ProductService } from 'src/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

}
