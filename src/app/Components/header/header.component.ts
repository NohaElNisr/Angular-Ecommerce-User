import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart.service';
import { UserAPIService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isuserlogged:boolean=false;
  public totalitem:number=0;
  constructor(private userapiservise:UserAPIService, private catrservices:CartService) {
    this.catrservices.cartbehaviosubject.subscribe((data)=>{
      this.totalitem=data;
    })
   }
  
 
 
  
   logout(){
     this.userapiservise.logout()
      }
  ngOnInit(): void {
    this.isuserlogged=this.userapiservise.isUserLogged;
    // this.catrservices.getproducts().subscribe(res=>{
      // this.totalitem=res.length;

    // })
    this.cartitem()
  }
  cartitem(){
    if(localStorage.getItem('localCart')!=null){
var cartcount=JSON.parse( localStorage.getItem('localCart')!);
console.log(cartcount);
this.totalitem=cartcount.length;
    }
  }

}
