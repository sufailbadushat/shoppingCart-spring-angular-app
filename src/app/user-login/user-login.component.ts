import { Component } from '@angular/core';
import {  Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  emailId = ""
  password = ""

  constructor( private api: ApiService, private route:Router) { }
 
  readValues = () => {
    let data: any =
    {
      "emailId": this.emailId,
      "password": this.password
    }
    console.log(data)
    this.api.loginUser(data).subscribe(
      (response: any) => {
        if (response.status == "success") {
         let userId=response.userId
         console.log(userId)
         localStorage.setItem("userInfo",userId)
         this.route.navigate(['/cardView'])

        }
        else {
          alert(response.message)
        }
      }
    )
  }
}
