import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { ProductsComponent } from '../products/products.component';
import {MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-ProductImage',
  templateUrl: './ProductImage.component.html',
  styleUrls: ['./ProductImage.component.scss']
})
export class ProductImageComponent implements OnInit {
  private currprdID: number = 0;
  
  
id:number=0;

img:string="";
  currprd: IProduct | undefined = undefined;
  Id: number=0;
  constructor(private activatedRoute: ActivatedRoute, private prdserviceAPI:ProductAPIService,
  private router:Router, private dialogRef: MatDialogRef < ProductsComponent > , @Inject(MAT_DIALOG_DATA) data:IProduct) {  
      this.currprdID = data.id  
  }

  
  ngOnInit(): void {
    // this.currprdID = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    // this.prdserviceAPI.getProductByID(this.currprdID).subscribe(prd=>{
    //   this.currprd=prd;
    // });
    
    this.prdserviceAPI.getAllProducts(). subscribe(result => {  
      this.currprd = result.find(a => a.id == this.currprdID);  
    
      this.img = String(this.currprd?.image);


      

  });
}
  close() {  
    this.dialogRef.close();  
    this.router.navigate(['/Product/Products'])
    
}
public createImgPath = (serverPath: string|undefined) => { 
  return `http://localhost:34443/${serverPath}`; 
}


}


