import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from 'src/app/shared_classes_and_types/shared.classes';
import { ProductserviceService } from 'src/services/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  // discount: DiscountOffers = DiscountOffers.No_Discounts;
  discount: DiscountOffers = DiscountOffers.tenPercent;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurchasesd: boolean;

  // returnedProductList:any[]=[];

  constructor(private productSErvice:ProductserviceService) {
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
      {id:10, name:"SAMSUNG", quantity:15, price:5000, img:"string"},
      {id:20, name:"Huawei", quantity:10, price:6000, img:"string"},
      {id:30, name:"iphone", quantity:7, price:10000, img:"string"},
      {id:40, name:"Lenovo", quantity:4, price:8000, img:"string"}
    ]
  }

  // @Input() clickFromParent:any;
  @Output() childEvent = new EventEmitter();

  ngOnInit(): void {
    // this.returnedProductList = this.productSErvice.getAllProducts();
    // console.log("hello from product component");
    // console.log(this.returnedProductList);
    // this.renderValues();
  }

  showOrHide(){
    this.isPurchasesd = !this.isPurchasesd;
  }

  renderValues():any[]{
    return this.productList = this.productSErvice.getAllProducts();
  }
}