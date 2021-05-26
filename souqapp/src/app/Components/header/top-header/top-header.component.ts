import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  currentLang: string;
  @Output() language: EventEmitter<any> = new EventEmitter();

  constructor( public translate: TranslateService) {
    this.currentLang=localStorage.getItem('currentLang')||'en';
    this.translate.use(this.currentLang)
 }
 changeCurrentLang(lang:string){
  this.translate.use(lang)
  localStorage.setItem('currentLang',lang);
  this.language.emit(lang)

}

  ngOnInit(): void {
  }

}
