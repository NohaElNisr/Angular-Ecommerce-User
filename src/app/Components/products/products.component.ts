import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { Output, EventEmitter } from '@angular/core';

import { Cart } from 'src/app/Models/Icart';
import { Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ProductImageComponent } from '../ProductImage/ProductImage.component';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { CartService } from 'src/app/Services/Cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  store: Store;
  //category: ICategory[];
  ClientName: string;
  // ProductList: IProduct[];
  IsPurshased: boolean = true;
  IsShow: boolean = false;
  selectedCatID: number = 1;
  plainCreditCard: string = '1234567891234567';
  idNumber: string = "";
  selectdate: Date = new Date();
  Purchasedate: Date = new Date();
  @Input() receivedSelectedCatID: number = 0;
  orderTotalPrice: number = 0;

  @Output() onToTalPriceChanged: EventEmitter<number>;
  @Output() OnAddToCart: EventEmitter<Cart>
  prdListofCat: IProduct[] = [];
  editlistproduct: IProduct[]=[];
  catList: ICategory[]=[];
  selectedcatID: number = 0;
  constructor(private cartservice:CartService,
    private router: Router,private prdAPIservices:ProductAPIService,private dialog: MatDialog,private catAPIservices:CategoryAPIService) {

    this.OnAddToCart = new EventEmitter<Cart>();
    this.onToTalPriceChanged = new EventEmitter<number>();
    this.ClientName = "";

    this.store = {
      Name: "SOUQ Store",
      Img: '/src/apple-touch-icon.png',
      Branches: ["Cairo", "Alex", "Aysut"]
    };

  }
  ngOnChanges(changes: SimpleChanges): void {

    this.prdAPIservices.getProductByCatID(this.receivedSelectedCatID).subscribe(prdlist=>{
      this.prdListofCat=prdlist;
    });

  }

  ngOnInit(): void
  
  {
    // this.catAPIservices.getAllCategory().subscribe(catList=>{
    //   this.catList=catList;
    // });
    
    this.prdAPIservices.getAllProducts().subscribe(prdlist=>{
      this.prdListofCat=prdlist;

     this.prdListofCat.forEach((a:IProduct)=>{
Object.assign(a,{quantity:1,total:a.price});
     })
    });
  }
    public createImgPath = (serverPath: string) => { 
      return `http://localhost:34443/${serverPath}`; 
    }
  
    delete(id:number){
      this.prdAPIservices.DeleteProduct(id).subscribe(data=>{
        {}
      })
    }

    


    openDialog(data:IProduct) {

      const dialogConfig = new MatDialogConfig();  
        dialogConfig.disableClose = true;  
        dialogConfig.autoFocus = true;  
        dialogConfig.position = {  
            'top': '100px',  
            'left': '500px'  
        };  
        dialogConfig.width = '500px';  
        dialogConfig.height = '500px';  
        dialogConfig.data = {  
            id: data.id  
        };  
        this.dialog.open(ProductImageComponent, dialogConfig);
  }

  openproductdetails(prdID: number) 
  {
    this.router.navigate(['/Products', prdID]);

  }



  Buy() {
    this.IsPurshased = !this.IsPurshased;
    this.IsShow = !this.IsShow

  }

  
  Addtocart(prd: IProduct, Quanitynumber: number) {
    if (prd != null && prd.quantity >= Quanitynumber) {
      this.OnAddToCart.emit({
        productID: prd.id,
        productName: prd.name,
        UnitPrice: prd.price,
        Selectedquantity: Quanitynumber,
        TotalPrice: prd.price * prd.quantity,
        TaxValue: prd.price * (14 / 100)

      })
    }

  
  }
  // addtocartapi(prd:IProduct){
  //   this.cartservice.addtocart(prd);
    
  // }
  itemcart:IProduct[]=[];
  addtocartloacalstorage(prd:IProduct){
    console.log(prd);
    let cartData=localStorage.getItem('localCart');
    if(cartData==null){
      let storedataget:any=[];
      storedataget.push(prd);
      localStorage.setItem('localCart',JSON.stringify(storedataget))

    }
    else{
      var id=prd.id;
      let index:number=-1;
this.itemcart=JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0;i<this.itemcart.length;i++){
        if(id===this.itemcart[i].id){
          this.itemcart[i].quantity=prd.quantity;
          index=i;
          break;
        }
      }
      if(index==-1){
        this.itemcart.push(prd);
        localStorage.setItem('localCart',JSON.stringify(this.itemcart))
      }
    else{
      localStorage.setItem('localCart',JSON.stringify(this.itemcart))

    }
}
this.cartnumbers();
   
  }

  cartNumber:number=0;
  cartnumbers(){
    var cartvalue=JSON.parse(localStorage.getItem('localCart')!);
this.cartNumber=cartvalue.length;
this.cartservice.cartbehaviosubject.next(this.cartNumber);
console.log(this.cartNumber)
  }
  //   edit(newPrd:IProduct,index:number){
// this.
//   }
increasequatity(item:IProduct){
  let prod=this.prdListofCat.find(x=>x.id==item.id)
  if(item.quantity!=5){
   item.quantity+=1;
  }
// else{
//   alert("imposiible")
// }
   
}
decreasequatity(item:IProduct){
  if(item.quantity!=1){
  item.quantity-=1;}
}}
