export interface ICategory {
    audience:     string[];
    createdAt:    ITimeseries;
    brands:       string[];
    brands_ar:       string[];
    categoryName: string;
    categoryName_ar: string;
    updatedAt:    ITimeseries;
}

export interface ITimeseries {
    seconds:     number;
    nanoseconds: number;
}