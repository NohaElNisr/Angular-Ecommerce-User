import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private httpoptions;
  constructor(private httpClient: HttpClient) {
this.httpoptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  }

  getAllProducts(): Observable<IProduct[]> {

    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/api/Product`)

  }

  getProductByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(` ${environment.APIBaseURL}/api/Product/Catid?catID=${catID}`)

  }

  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(` ${environment.APIBaseURL}/api/Product/${prdID}`)


  }
  addNewProduct(newPrd: IProduct):Observable<IProduct>{
return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/api/Product`,JSON.stringify(newPrd),this.httpoptions)
  }
  updatePro(updatedPro: IProduct, id: number): Observable<IProduct> 
  {
    return this.httpClient.put<IProduct>(`${environment.APIBaseURL}/api/Product/${id}`, updatedPro)
  }
  DeleteProduct(prdID:number):Observable<IProduct>{
    return this.httpClient.delete<IProduct>(` ${environment.APIBaseURL}/api/Product/${prdID}`)
  }

}

