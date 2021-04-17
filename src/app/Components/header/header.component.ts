import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggled: boolean = true;
  @ViewChild('sidebarCollapse', {static: true}) sideBarCollapse: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  toggleClass(): void{
    this.isToggled = !this.isToggled;
  }
}
