import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { Cart } from 'src/app/Models/Icart';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
  catList: ICategory[]=[];
  selectedcatID: number = 0;
  ReceivedorderToTalPrice: number = 0
  ReceivedCartItem: Cart[] = [];
  //non-null assertion operator
  @ViewChild('clientname') clientNameInp!: ElementRef;
  @ViewChild(ProductsComponent) ProductCompObje!: ProductsComponent;
  constructor(private catAPIservices:CategoryAPIService) {

   

  }
  ngAfterViewInit(): void {
    // this.clientNameInp.nativeElement.style.color = "blue";
    // console.log(this.clientNameInp.nativeElement.value = "Noha Salah")





  }
  checkout() {
    for (let item of this.ProductCompObje.prdListofCat) {
      var prd = this.ReceivedCartItem.find(p => p.productID == item.id)
      if (prd) {
        item.quantity -= prd.Selectedquantity;
      
      }

    }
    this.ReceivedCartItem = [];
    alert('Process Done');
  }

  ngOnInit(): void {

    this.catAPIservices.getAllCategory().subscribe(catList=>{
      this.catList=catList;
    });
  }

  showcart(cart: Cart) {
    this.ReceivedCartItem.push(cart);
    this.ReceivedorderToTalPrice+=cart.TotalPrice;
  }
  Remove() {
    this.ReceivedCartItem.pop();

  }



  updateTotalPrice(totalprice: number) {

    //this.ReceivedorderToTalPrice+=totalprice;
  }
}
