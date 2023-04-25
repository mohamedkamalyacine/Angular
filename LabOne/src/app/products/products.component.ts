import { Component } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from 'src/app/shared_classes_and_types/shared.classes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  
  discount:DiscountOffers = DiscountOffers.tenPercent;
  storeName:string;
  storeLogo:string;
  productList:IProduct[];
  categoryList:ICategory[];
  clienName:string;
  isPurchasesd:boolean;

  constructor(){
    this.storeName = "unkonwName";
    this.storeLogo = "unkonwLogo";
    this.clienName = "xyz";
    this.isPurchasesd = false;
  }
  
}
