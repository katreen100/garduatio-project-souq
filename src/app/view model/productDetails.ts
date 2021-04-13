
export interface  ProductDetails {
    "id":number,
"title": string
"  titleAr": string,
"brandID": number,
"categoryID": number,
"quantity": number,
"mainImage": string,
"images": string[],
"description": string[],
"descriptionAr": string[],
"features":string [] ,
"condition": string,
"conditionAr": string,
"freeshipping":boolean
" freeshippingAr": boolean,
"fullfilledBySouq": boolean,
"tax": number,
"leftOnStock":number,
"Soldby":string,
"productVarities": {
    "color": string[],
   " size": string[]
},
"productVaritiesAr": {
    "color":string [],
   " size": string[]
},
"specifications": {
    "type":string,
    "targetedGroup": string,
   " modelNumber": string,
    "expirable": boolean,
    "expiryDate": any
},
"specificationsAr": {
    "type": string,
    "targetedGroup": string,
   " modelNumber": string,
    "expirable": boolean,
    "expiryDate": any
},
"price": {
    "currentPrice": number,
    "previousPrices": {
        "timestamp": number,
        "timestamp2": number,
        "timestamp3": number
    },
    "savedMoney":number
}
}

