import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(private api:ApiService){}

  name=""
  address=""
  emailId=""
  phoneNumber=""
  password=""
  cPassword=""

  readValue=()=>{
    let data:any={

      "name":this.name,
      "address":this.address,
      "emailId":this.emailId,
      "phoneNumber":this.phoneNumber,
      "password":this.password,
      "cPassword":this.cPassword

    }
    console.log(data);
    this.api.addUser(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status =="success" && this.password == this.cPassword){
          console.log(data);
          alert("Registered successfully! \n\nGoto login page.");
          this.name=""
          this.address=""
          this.emailId=""
          this.phoneNumber=""
          this.password=""
          this.cPassword=""
        }
        else{
          alert("Add same password!");
        }
      }
    )
  }
}
