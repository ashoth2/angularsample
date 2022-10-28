import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  onbuyclick(title:string){
        
    alert('Thank You for Purchase this '+title+' ')
  }

  constructor() { }
}
