import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product-admin',
  templateUrl: './search-product-admin.component.html',
  styleUrls: ['./search-product-admin.component.css']
})
export class SearchProductAdminComponent {

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
