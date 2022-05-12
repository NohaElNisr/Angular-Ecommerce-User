import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/iuser';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {
  private httpoptions;
private IsLoggedSublect:BehaviorSubject<Boolean>;
  admintoken:any;
  tokendata:any
  constructor(private httpClient:HttpClient,private router:Router) { 
    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':'Token'

      })
      
  }
  this.IsLoggedSublect= new BehaviorSubject<Boolean>(false);

}
// register(data:any):Observable<any>{
  
//     return this.httpClient.post<any>(`${environment.APIBaseURL}/user`,data)
  
// }
  registeruser(user:User):Observable<User>{
    return this.httpClient.post<User>(`${environment.APIBaseURL}/api/Account/Register`,user,this.httpoptions)
      }


      getAlluser(): Observable<User[]> {

        return this.httpClient.get<User[]>(`${environment.APIBaseURL}/api/Account/getUsers`)
    
      }
    
    
    
      // getuserByID(prdID: number): Observable<IUser> {
      //   return this.httpClient.get<IUser>(` ${environment.APIBaseURL}/user/${prdID}`)
    
    
      // }
      
     
      // updateUser(user:IUser,id:number) 
      // {
      //   return this.httpClient.patch<IUser>(` ${environment.APIBaseURL}/user/${id}`,user)
      // }
      // DeleteProduct(prdID:number):Observable<IUser>{
      //   return this.httpClient.delete<IUser>(` ${environment.APIBaseURL}/user/${prdID}`)
      // }

      login(user:User):Observable<User>{
        
       
            
       return this.httpClient.post<User>(`${environment.APIBaseURL}/api/Account/Login`,JSON.stringify( user),this.httpoptions).pipe
      (map(
        admintoken=>{
          this.admintoken=admintoken;
          this.tokendata=this.admintoken.token;
          console.log(this.tokendata);
          localStorage.setItem("token",this.admintoken);
          localStorage.setItem("tokendata",this.tokendata);
          this.IsLoggedSublect.next(true);
          return admintoken;

        }
      ));
      
      }
        getStatutsLogging(){
          return this.IsLoggedSublect;
        }
loggedIn(){
  return !!localStorage.getItem("token");
}


          logout(){
        
            
            localStorage.removeItem("tokendata");
            this.router.navigate(['/Login/login']);
              }

public getToken():string{
  return localStorage.getItem('tokendata')!;
  
}

              
              get isUserLogged():boolean
              {
        return (localStorage.getItem('tokendata'))?true:false
        
              }
}
