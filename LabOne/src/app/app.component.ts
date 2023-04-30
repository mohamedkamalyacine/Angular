import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'LabOne';

  @ViewChild(ProductsComponent) child :ProductsComponent;
  
  appProductList:any[];

  clickFromChild:any;

  isClicked:boolean = false;

  ngOnInit(): void {
  }
  

  ngAfterViewInit()
  {
    this.appProductList = this.child.renderValues();
  }
  
  toggleButtonState(){
    this.isClicked = !this.isClicked;
  }
}
