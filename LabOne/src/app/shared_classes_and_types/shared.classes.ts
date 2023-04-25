export interface IProduct{
    id:number;
    name:string;
    quantity:number;
    price:number;
    img:string;
}

export interface ICategory {
    id:number;
    name:string;
}

export enum DiscountOffers {
    No_Discounts = 0,
    tenPercent = 10,
    fiftenPercent = 15
}