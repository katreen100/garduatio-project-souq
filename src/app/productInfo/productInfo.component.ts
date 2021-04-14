import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-productInfo',
  templateUrl: './productInfo.component.html',
  styleUrls: ['./productInfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() Brand: string = '';
  @Input() ManufacturerNumber: string ='';
  @Input() operatingSystem: string='';
  @Input() backegeThickness: string ='';
  @Input() discription: string = 'Are you looking for the perfect tablet? The Huawei MediaPad T3 is ideal, whether you were getting for your personal use or for your kids. The 10-inch touch screen ensures you get enough screen space to play your favorite games and watch your favorite movies in a striking 1280x800 resolution. And with a 5MP rear camera and a 2MP front camera, you will be able to keep your ...';
  @Input() sim: string = '';
  @Input() ROM: string = '';
  @Input() RAM: string = '';
  @Input() RearCamera: string = '';
  @Input() FrontCamera: string = '';
  @Input() display: string = '';
  @Input() fastCharge: boolean;
  @Input() corningGlass: boolean;


 

  constructor() { }

  ngOnInit() {
  }

}
