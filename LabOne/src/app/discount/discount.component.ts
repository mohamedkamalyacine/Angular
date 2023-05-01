import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit{

  @Input() disCountedProducts:any[];
  @Input() productsWithoutDiscounts:any[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(){
    // this.router.navigate(['discounts'] ,{ relativeTo: this.activatedRoute });
  }

}
