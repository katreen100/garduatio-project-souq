import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchKeyWord: string;
  private Subscription:Subscription[]=[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.paramMap.subscribe(param => {
      this.searchKeyWord = param.get('searchParam')
    })
    console.log(this.searchKeyWord)
    this.Subscription.push(sub)
  }

}
