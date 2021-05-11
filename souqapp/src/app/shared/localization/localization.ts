import { ICategory } from "@models/icategory";
import { IParentProduct, IProductSpecs, IProductVariant } from "@models/iproduct";

let locale = 'ar-EG';


// table names
let category = (locale == 'ar-EG') ? 'categoryArabic' : 'categoryEnglish';
let product = (locale == 'ar-EG') ? 'productArabic' : 'productEnglish';

export { category, product, locale };


export function LocalizeProduct(dbProduct: IParentProduct, parentProductId): IParentProduct {
    if (locale == 'ar-EG') {
        dbProduct.parentId = parentProductId;
        dbProduct.name = dbProduct.name_ar;
        dbProduct.allVariations = dbProduct.allVariations_ar;
        dbProduct.categoryName = dbProduct.categoryName_ar;
        dbProduct.brandName = dbProduct.brandName_ar;
        dbProduct.condition = dbProduct.condition_ar;
        dbProduct.description = dbProduct.description_ar;
        dbProduct.features = dbProduct.features_ar;
        // dbProduct.shipping = dbProduct.shipping_ar;
        dbProduct.sellerNotes = dbProduct.sellerNotes_ar;
        return dbProduct;
    } else {
        dbProduct.parentId = parentProductId;
        return dbProduct;
    }
}

export function LocalizeProductSpecs(dbProduct: IProductSpecs): IProductSpecs {
    if (locale == 'ar-EG') {
        dbProduct.specs = dbProduct.specs_ar;
        return dbProduct;
    } else {
        return dbProduct;
    }
}

export function LocalizeProductVariant(dbProduct: IProductVariant): IProductVariant{
    if (locale == 'ar-EG') {
        dbProduct.variation = dbProduct.variation_ar;
        return dbProduct;
    } else {
        return dbProduct;
    }
}


export function LocalizeCategory(dbProduct: ICategory): ICategory {
    if (locale == 'ar-EG') {
        dbProduct.brands = dbProduct.brands_ar;
        dbProduct.categoryName = dbProduct.categoryName_ar;
        return dbProduct;
    } else {
        return dbProduct;
    }
}