
export interface  ProductDetails {
    "id"?:number,
"title"?: string
"  titleAr"?: string,
"brandID"?: number,
"categoryID"?: number,
"quantity"?: number,
"mainImages"?: string[],
"sideImages"?: string[],
"description"?: string[],
"descriptionAr"?: string[],
"features"?:string [] ,
"condition"?: string,
"conditionAr"?: string,
"freeshipping"?:boolean
" freeshippingAr"?: boolean,
"fullfilledBySouq"?: boolean,
"tax"?: number,
"leftOnStock"?:number,
"Soldby"?:string,
"productVarities"?: {
   
},
"productVaritiesAr"?: object,
"specifications"?: {
    "type"?:string,
    "targetedGroup"?: string,
   " modelNumber"?: string,
    "expirable"?: boolean,
    "expiryDate"?: any
},
"specificationsAr"?: {
    "type"?: string,
    "targetedGroup"?: string,
   " modelNumber"?: string,
    "expirable"?: boolean,
    "expiryDate"?: any
},
"price"?: {
    "currentPrice"?: number,
    "discount"?:number,
    "previousPrices"?: {
        "timestamp"?: number,
        "timestamp2"?: number,
        "timestamp3"?: number
    },
    "savedMoney"?:number
}
}

