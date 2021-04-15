import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent implements OnInit {
  Cateogryoptions = [
    { value: '1', label: 'Watches' },
    { value: '2', label: 'Smart Watches' },
    { value: '3', label: 'Children Watches' },
    { value: '4', label: 'Sport Watches' },
  ];


  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: true
  };

  Condition = [
    {value : 1 , label : "New"},
    {value : 2 , label : "Old"}
  ];

  Brand = [
    {value : 1 , label : "X"},
    {value : 2 , label : "Y"},
    {value : 1 , label : "Z"},
    {value : 2 , label : "A"},
    {value : 1 , label : "B"},
    {value : 2 , label : "C"}
  ]


  constructor() { }

  ngOnInit(): void {

  }


}
