import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/view model/productDetails';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-productgallary',
  templateUrl: './productgallary.component.html',
  styleUrls: ['./productgallary.component.css'],
  providers: [NgbModalConfig, NgbModal,NgbCarouselConfig]
})
export class ProductgallaryComponent implements OnInit {
  product:ProductDetails={
    
    "id": 2,
    "title": "Watch xyz",
  "  titleAr": "ساعة يد",
    "brandID": 3,
    "categoryID": 2,
    "quantity": 5,
    "sideImages": ["url"],
    "mainImages": ["https://image.shutterstock.com/image-illustration/digital-generated-devices-on-desktop-260nw-1495869476.jpg", "https://image.shutterstock.com/image-illustration/digital-generated-devices-on-desktop-260nw-1495869476.jpg"],
    
    "description": ["string of description","anther discribtion"],
    "descriptionAr": ["وصف المنتج","وصف اخر "],
    "features": ["لا تتأثر بالماء", "امكانيات الساعة"],
    "condition": "new",
    "conditionAr": "جديدة",
    "freeshipping": true,
   " freeshippingAr": true,
    "fullfilledBySouq": true,
    "tax": 14,
    "leftOnStock":4,
    "Soldby":"GUCCI",

    "productVarities": {
        "color": ["blue", "green", "red"],
       " size": ["large", "small"]
    },
    "productVaritiesAr": {
        "color": ["ازرق", "اخضر", "احمر"],
       " size": ["كبير","صغير"]
    },
    "specifications": {
        "type": "casual watch",
        "targetedGroup": "male",
       " modelNumber": "2342-232-2",
        "expirable": false,
        "expiryDate": null
    },
    "specificationsAr": {
        "type": "casual watch",
        "targetedGroup": "للرجال",
       " modelNumber": "2342-232-2",
        "expirable": false,
        "expiryDate": null
    },
    "price": {
        "currentPrice": 500,
        "discount":15,
        "previousPrices": {
            "timestamp": 400,
            "timestamp2": 300,
            "timestamp3": 600
        },
        "savedMoney":0,
    }
   }
   images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbModalConfig,configc: NgbCarouselConfig, private modalService: NgbModal) { 
    
    config.backdrop = 'static';
    config.keyboard = false;
    configc.interval = 10000;
    configc.wrap = true;
    configc.keyboard = true;
    configc.pauseOnHover = false;
  }
  openlg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
  }

}
