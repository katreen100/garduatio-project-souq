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
