import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/Services/Cart.service';

@Component({
  selector: 'app-AddToCart',
  templateUrl: './AddToCart.component.html',
  styleUrls: ['./AddToCart.component.scss']
})
export class AddToCartComponent implements OnInit {
public product:any=[];
public grandTotal:number=0;

  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartDetails()
    this.loadcart()
    
  }

 
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:34443/${serverPath}`; 
  }

  getcartDetails:IProduct[]=[]
  cartDetails(){
    if(localStorage.getItem('localCart')){

this.getcartDetails=JSON.parse( localStorage.getItem('localCart')!);
console.log(this.getcartDetails);
    }
  }
  increasequanit(id:number,quantity:number){
for(let i=0;i<this.getcartDetails.length;i++){
  if(this.getcartDetails[i].id===id){
    if(quantity!=5){
      this.getcartDetails[i].quantity=quantity+1;

    }
  }
}
localStorage.setItem('localCart',JSON.stringify(this.getcartDetails));
this.loadcart()
  }
  deceasequanit(id:number,quantity:number){
    for(let i=0;i<this.getcartDetails.length;i++){
      if(this.getcartDetails[i].id===id){
        if(quantity!=1){
          this.getcartDetails[i].quantity=quantity-1;
    
        }
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getcartDetails));
    this.loadcart()
  }
  totalprice:number=0;
  loadcart(){
    if(localStorage.getItem('localCart')){
    this.getcartDetails=JSON.parse( localStorage.getItem('localCart')!);
  this.totalprice=this.getcartDetails.reduce(function(acc,val){
    return acc+(val.price*val.quantity)
  },0) 
  }
  }
  removeall(){
    localStorage.removeItem('localCart');
    this.getcartDetails=[];
    this.totalprice=0;
    this.cartNumber=0;
    this.cartservice.cartbehaviosubject.next(this.cartNumber);

  }
  removeitem(id:Number){
    if(localStorage.getItem('localCart')){
      this.getcartDetails=JSON.parse( localStorage.getItem('localCart')!);
      for(let i=0;i<this.getcartDetails.length;i++){
        if(this.getcartDetails[i].id===id){
         
            this.getcartDetails.splice(i,1);
            localStorage.setItem('localCart',JSON.stringify(this.getcartDetails))
      this.loadcart();
      this. cartnumbers();
          }
        }
    }

}
cartNumber:number=0;
  cartnumbers(){
    var cartvalue=JSON.parse(localStorage.getItem('localCart')!);
this.cartNumber=cartvalue.length;
this.cartservice.cartbehaviosubject.next(this.cartNumber);
console.log(this.cartNumber)
  }
  checkout(){
    this.totalprice;
  }
}
