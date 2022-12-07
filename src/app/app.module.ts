import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductAdminComponent } from './search-product-admin/search-product-admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


let myRoot:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userRegister",
    component:UserRegisterComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"search",
    component:SearchProductAdminComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductAdminComponent,
    NavAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoot),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
