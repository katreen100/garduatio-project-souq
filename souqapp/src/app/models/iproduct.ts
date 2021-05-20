import { ITimeseries } from "./icategory";

export interface IProduct {
    brandName:          string;
    mainImage:          string;
    updatedAt:          ITimestamp;
    averageRating:      number;
    features:           string[];
    discount:           number;
    description:        string;
    ProductName:        string;
    price:              number;
    shipping:           string;
    tax:                number;
    quantity:           number;
    categoryName:       string;
    sellerNotes:        string[];
    allVariations:      {};
    parentId:           string;
    mainAmongVariants:  boolean;
    createdAt:          ITimestamp;
    variation:          {};
    condition:          string;
    eligibleForCoupons: boolean;
}


export interface ITimestamp {
    seconds:     number;
    nanoseconds: number;
}


export interface IProductCard {
    averageRating:     number;
    shipping:          string;
    mainAmongVariants: boolean;
    locale:            string;
    tax:               number;
    productName:       string;
    mainImage:         string;
    allVariantions:    {};
    discount:          number;
    price:             number;
    parentId:          string;
}

export interface IRatingDetails {
    four:          number;
    averageRating: number;
    two:           number;
    three:         number;
    five:          number;
    one:           number;
}

export interface IProductImages {
    thumbnail: string;
    regular:   string;
    locale:    string;
}

export interface IReview {
    positives:      string;
    parentId:       string;
    reviewDate:     ITimestamp;
    isNotHelpful:   number;
    rating:         string;
    isHelpful:      number;
    reviewBody:     string;
    reviewerName:   string;
    negatives:      string;
    reviewLanguage: string;
}

export interface IProductVariantImages {
    regular:   string;
    thumbnail: string;
}

export interface IParentProduct {
    parentId:           string;
    condition_ar:       string;
    features:           string[];
    eligibleForCoupons: boolean;
    updatedAt:          ITimestamp;
    features_ar:        string[];
    categoryName_ar:    string;
    categoryName:       string;
    mainImage:          string;
    allVariations_ar:   { };
    condition:          string;
    description_ar:     string;
    allVariations:      { };
    name:               string;
    averageRating:      number;
    brandName:          string;
    price:              number;
    // shipping_ar:        string;
    sellerNotes_ar:     string[];
    mainVariant:        string;
    brandName_ar:       string;
    discount:           number;
    // shipping:           string;
    name_ar:            string;
    createdAt:          ITimestamp;
    tax:                number;
    variants:           string[];
    sellerNotes:        string[];
    description:        string;
    freeShipping:       boolean;
}


export interface IProductSpecs {
    specs:    { };
    specs_ar: { };
}


export interface IProductVariant {

    images:          [];
    quantity:        number;
    variation_ar:    { };
    variation:       { };
}


export interface IWishListItemID {
    parentProductId: string;
    variantId:       string;
}


export interface IVariant {
    variation_ar: {};
    quantity:     number;
    variation:    {};
    mainImage:    string;
    images:       Image[];
}

export interface Image {
    thumbnail: string;
    regular:   string;
}