import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './shared_classes_and_types/shared.classes';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'LabOne';

  @ViewChild(ProductsComponent) child :ProductsComponent;
  messageFromChild:any;
  
  appProductList:IProduct[];

  clickFromChild:any;

  isClicked:boolean = false;

  ngOnInit(): void {
  }
  

  ngAfterViewInit()
  {
    this.child.renderValues();
    // this.appProductList = this.child.renderValues();
  }
  
  toggleButtonState(){
    this.isClicked = !this.isClicked;
  }
}
