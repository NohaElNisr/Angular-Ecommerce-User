import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  constructor(private httpClient:HttpClient) 
  {

  }
  getAllCategory():Observable<ICategory[]>
  {

return this.httpClient.get<ICategory[]>(`${environment.APIBaseURL}/api/Category`)
  
}
}