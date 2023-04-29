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

export interface IUser {
    name:string;
    username:string;
    email:string;
}

export interface IPost {
    id:number;
    title:string;
    body:string;
}

export enum DiscountOffers {
    No_Discounts = 0,
    tenPercent = 0.1,
    fiftenPercent = 0.15
}