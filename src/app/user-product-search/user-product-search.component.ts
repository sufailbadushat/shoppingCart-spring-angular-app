import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-product-search',
  templateUrl: './user-product-search.component.html',
  styleUrls: ['./user-product-search.component.css']
})
export class UserProductSearchComponent {

  searchValue:any={}


  name=""
  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={
      "name":this.name
    }
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid product name!")
        }
        else{
          this.searchValue=response
        }
      }
    )
  }
}
