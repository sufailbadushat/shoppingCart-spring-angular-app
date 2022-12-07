import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-product-view',
  templateUrl: './user-product-view.component.html',
  styleUrls: ['./user-product-view.component.css']
})
export class UserProductViewComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>{
        this.product=response;
      }
    )
  }
  product:any=[]
}
