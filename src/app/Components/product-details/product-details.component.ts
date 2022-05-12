import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/product-api.service';

import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private currprdID: number = 0;
  private prdIDlist: number[] = [];
  

  currprd: IProduct | undefined = undefined;
  constructor(private activatedRoute: ActivatedRoute, private prdserviceAPI:ProductAPIService,
    private location: Location,private router:Router) { }

  ngOnInit(): void {
    this.currprdID = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.prdserviceAPI.getProductByID(this.currprdID).subscribe(prd=>{
      this.currprd=prd;
    });
    

  }
  GoBack() {
    this.location.back();
  }


  prevProduct()
  {
let currindex=this.prdIDlist.findIndex((val)=>val==this.currprdID);
if(currindex!=0)
{
  this.currprdID=this.prdIDlist[currindex-1];
  this.router.navigate(['/Product/Products',this.currprdID])
}
  }
  nextProduct()
 {

  let currindex=this.prdIDlist.findIndex((val)=>val==this.currprdID);
  if(currindex<this.prdIDlist.length-1)
  {
    this.currprdID=this.prdIDlist[currindex+1];
    this.router.navigate(['/Product/Products',this.currprdID])
  }

}
isFirstItem():boolean{
return this.currprdID==this.prdIDlist[0];
}
islastItem():boolean{
  return this.currprdID==this.prdIDlist[this.prdIDlist.length-1];
  }

  public createImgPath = (serverPath: string|undefined) => { 
    return `http://localhost:34443/${serverPath}`; 
  }
}
