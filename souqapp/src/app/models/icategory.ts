export interface ICategory {
    audience:     string[];
    createdAt:    ITimeseries;
    brands:       string[];
    categoryName: string;
    updatedAt:    ITimeseries;
}

export interface ITimeseries {
    seconds:     number;
    nanoseconds: number;
}