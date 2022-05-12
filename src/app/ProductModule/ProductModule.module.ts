import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModuleComponent } from './ProductModule.component';
import { ProductsComponent } from '../Components/products/products.component';
import { ProductDetailsComponent } from '../Components/product-details/product-details.component';
import { ShoppingCartComponent } from '../Components/shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductImageComponent } from '../Components/ProductImage/ProductImage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog"
import { AddToCartComponent } from '../Components/AddToCart/AddToCart.component';
const routes:Routes=[
  {path:'',redirectTo:'/Product/Products',pathMatch:'full'},
  { path:'Products',component:ProductsComponent},
    { path:'Products/:pid',component:ProductDetailsComponent},
    { path:'Shopping',component:ShoppingCartComponent},
   { path:'AddToCart',component:AddToCartComponent},
]




@NgModule({
 
  declarations: [ProductModuleComponent, 
    ProductDetailsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductImageComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductModuleModule { }
