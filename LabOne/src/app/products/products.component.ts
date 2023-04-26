import { Component } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from 'src/app/shared_classes_and_types/shared.classes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  // discount: DiscountOffers = DiscountOffers.No_Discounts;
  discount: DiscountOffers = DiscountOffers.tenPercent;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurchasesd: boolean;

  constructor() {
    this.storeName = "Kamal Store";
    this.storeLogo = "unkonwLogo";
    this.clientName = "";
    this.isPurchasesd = false;
    
    this.categoryList = [
      { id: 10, name: "TVs" },
      { id: 20, name: "Mobiles" },
      { id: 30, name: "Accessories" }
    ];

    this.productList = [
      {id:1, name:"SAMSUNG", quantity:15, price:5000, img:"string"},
      {id:1, name:"Huawei", quantity:10, price:6000, img:"string"},
      {id:1, name:"iphone", quantity:7, price:10000, img:"string"},
      {id:1, name:"Lenovo", quantity:4, price:8000, img:"string"}
    ]
  }

  showOrHide(){
    // console.log( 'before click  --->  ' + this.isPurchasesd);
    this.isPurchasesd = !this.isPurchasesd;
    // console.log( 'After click  --->  ' + this.isPurchasesd);
  }

}