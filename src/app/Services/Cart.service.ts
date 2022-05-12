import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { ProductAPIService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public Productlist= new BehaviorSubject<any>([]);
 
  public cartitemlist:any=[]
  
constructor(private prdAPIservices:ProductAPIService) { }
getproducts()
{
    return this.Productlist.asObservable();
}
setproducts(product:any)
{
    this.cartitemlist.push(...product);
    this.Productlist.next(product);
}
addtocart(product:IProduct)
{
    this.cartitemlist.push(product);
    this.Productlist.next(this.cartitemlist);
    this.gettotalprice();
    console.log(this.cartitemlist);
}
gettotalprice() :number{
  let grandtotal=0;
  this.cartitemlist.map((a:any)=>
  {
          grandtotal +=a.total;
  })
  return grandtotal;
}
removecartitem(product:IProduct)
{
      this.cartitemlist.map((a:any,index:any)=>{
        if(product.id===a.id)
        {
          this.cartitemlist.splice(index,1)
        }
      })
      this.Productlist.next(this.cartitemlist);

}
removeall(){
  this.cartitemlist=[]
  this.Productlist.next(this.cartitemlist);
}
cartbehaviosubject= new Subject<any>();
}
