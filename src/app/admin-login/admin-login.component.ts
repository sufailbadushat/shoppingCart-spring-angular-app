import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private route:Router){}

  username = ""
  password = ""

  readValue = () => {
    let data: any = {
      "username": this.username,
      "password": this.password
    }
    console.log(data);
    if (this.username == "admin" && this.password == "12345") {
      this.route.navigate(['/view'])

    } else {
      alert("invalid credentials!");
    }
  }
}
