import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserAuthGuard } from './Gaurd/user-auth.guard';



const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    { path:'Home',component:HomeComponent},
  

    {
      path: 'User', 
      loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule),
      canActivate:[UserAuthGuard]
    },
    {
      path: 'Product', 
      loadChildren: () => import('src/app/ProductModule/ProductModule.module').then(m => m.ProductModuleModule),
      canActivate:[UserAuthGuard]
    },
    
    {
      path: 'Login', 
      loadChildren: () => import('src/app/LoggingModule/LoggingModule.module').then(m => m.LoggingModuleModule)
    },
  ]},
  
 
  
  { path:'**',component:NotFoundComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
