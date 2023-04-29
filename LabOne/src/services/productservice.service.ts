import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shared_classes_and_types/shared.classes';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  productList:IProduct[] = [
    {id:1000, name:"SAMSUNG", quantity:9, price:5000, img:"string"},
    {id:2000, name:"Huawei", quantity:15, price:6000, img:"string"},
    {id:3000, name:"iphone", quantity:27, price:10000, img:"string"},
    {id:4000, name:"Lenovo", quantity:40, price:8000, img:"string"}
  ]

  constructor() { }

  getAllProducts():IProduct[]{
    return this.productList;
  }
  
  getProductById(prdId: number): any {
    if (!prdId || isNaN(prdId)) {
      return null;
    }

    const product = this.productList.find(p => p.id === prdId);

    return product ? product : null;
  }
}