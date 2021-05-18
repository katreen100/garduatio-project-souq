import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-component',
  templateUrl: './rate-component.component.html',
  styleUrls: ['./rate-component.component.css']
})
export class RateComponentComponent implements OnInit {
  @Input() currentRate: number;
  @Input() size:string;

  constructor() {  }

  ngOnInit(): void {
  
  }

}
