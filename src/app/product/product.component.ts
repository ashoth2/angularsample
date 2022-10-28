import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'Product1';

  price: number = 500;



  //dependancy injection

  constructor(private buyproduct:BuyService,private router: Router ) { }

  onbuy(){
   
    this.buyproduct.onbuyclick(this.title)
  }


  onbuys(){
   
    this.buyproduct.onbuyclick(this.title ="Product2")
  }
  onbuyss(){
   
    this.buyproduct.onbuyclick(this.title ="Product3")
  }



  ngOnInit(): void {
  }


  gotoaddcart(){
    this.router.navigate(['/addcart'])
      }
    


}
