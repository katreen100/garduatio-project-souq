import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent implements OnInit {
  searchCat : string;
  searchCondition : string;
  searchBrand : string;

  Cateogryoptions = [
    { value: '1', label: 'Watches' },
    { value: '2', label: 'Smart Watches' },
    { value: '3', label: 'Children Watches' },
    { value: '4', label: 'Sport Watches' },
  ];

  cats = [...this.Cateogryoptions];

  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: true
  };

  Stars = [
    {value:5000 , label: 4},
    {value:4000 , label: 3},
    {value:3000 , label: 2},
    {value:2000 , label: 1}
  ];
  Condition = [
    {value : 1 , label : "New"},
    {value : 2 , label : "Old"}
  ];
  cond = [...this.Condition];

  Brand = [
    {value : 1 , label : "X"},
    {value : 2 , label : "Y"},
    {value : 1 , label : "Z"},
    {value : 2 , label : "A"},
    {value : 1 , label : "B"},
    {value : 2 , label : "C"}
  ]
  bran = [...this.Brand];




  constructor() { }

  ngOnInit(): void {

  }
  Search(){

    if(this.searchCat != ""){
      this.Cateogryoptions = this.cats.filter(res=>{
        console.log(res.label);
        console.log(this.searchCat);
        return res.label.toLocaleLowerCase().startsWith(this.searchCat.toLocaleLowerCase());
      })
    }
    else{
      this.Cateogryoptions = [...this.cats]
    }

    
  }
  SelectedProduct(item){
    console.log(item);
  }
  priceFromTo(from , to){
    console.log(from);
    console.log(to);
  }

  averageRating(value, label){
    console.log(value);
    console.log(label);
    
    
  }
  SearchCondition(){
    if(this.searchCondition != ""){
      this.Condition = this.cond.filter(res=>{
        console.log(res.label);
        console.log(this.searchCondition);
        return res.label.toLocaleLowerCase().startsWith(this.searchCondition.toLocaleLowerCase());
      })
    }
    else{
      this.Condition = [...this.cond]
    }

  }
  SelectedCondition(item){
    console.log(item);
    
  }

  SearchBrand(){
    if(this.searchBrand != ""){
      this.Brand = this.bran.filter(res=>{
        console.log(res.label);
        console.log(this.searchBrand);
        return res.label.toLocaleLowerCase().startsWith(this.searchBrand.toLocaleLowerCase());
      })
    }
    else{
      this.Brand = [...this.bran]
    }

  }
  brandOption(item){
    console.log(item);
  }


}
