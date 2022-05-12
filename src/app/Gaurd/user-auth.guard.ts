import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAPIService } from '../Services/user-api.service';
@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private UserAPIService:UserAPIService,
    private router:Router ){}
   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.UserAPIService?.getStatutsLogging().subscribe(state=>{
       return state;
     }))
   {
 console.log(" Hi Noha");
 return true;
   }
   else{
     this.router?.navigate(['/Login/login'])
     return false;
   }
   
 }
  
}
