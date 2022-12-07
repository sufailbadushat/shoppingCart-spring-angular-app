import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProduct=()=>{
    return this.http.get("http://localhost:8080/view");
  }

  addProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend);
  }

  searchProduct=(dataToSearch:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSearch);
  }

  addUser=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addUser",dataToSend)
  }
}
