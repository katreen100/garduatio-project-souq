import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ProductDetails } from 'src/app/view model/productDetails';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap'
import { OrderShipingInfo } from 'src/app/view model/orderShipingInfo';

@Component({
  selector: 'app-oneProductComp',
  templateUrl: './oneProductComp.component.html',
  styleUrls: ['./oneProductComp.component.css'],
  providers: [NgbModalConfig, NgbModal,NgbDropdown]
})
export class OneProductCompComponent implements OnInit {
  product:ProductDetails={
    
    "id": 2,
    "title": "Watch xyz",
  "  titleAr": "ساعة يد",
    "brandID": 3,
    "categoryID": 2,
    "quantity": 5,
    "sideImages": ["url"],
    "mainImages": ["url1", "url2"],
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
        "discount":10,
        "previousPrices": {
            "timestamp": 400,
            "timestamp2": 300,
            "timestamp3": 600
        },
        "savedMoney":0,
    }
   }
   orderinfo:OrderShipingInfo[];


  constructor( config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.orderinfo=[
     {prodID:2,
      shippingCity:["cairo"],
      arrivalDate:new Date(1-2-2021)}
    ]
  }
  openlg(content) {
    
    this.modalService.open(content, { size: 'lg' });
  
  }
  calPricefterDiscount(){
    return this.product.price.currentPrice-(this.product.price.currentPrice*this.product.price.discount/100)

   }
  
  calcSavedMony():number{
    return this.product.price.currentPrice-this.calPricefterDiscount()
   }
  
  
getarrivalDate(id:number){
   return this.orderinfo.find(prod=>(prod.prodID=id)).arrivalDate

}
  ngOnInit() {
  }

}
