import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingModuleComponent } from './LoggingModule.component';
import { RegisterComponent } from '../Components/register/register.component';
import { LoginComponent } from '../Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes:Routes=[
  {path:'',redirectTo:'/Login/login',pathMatch:'full'},
  { path:'register',component:RegisterComponent},
  { path:'register/:uid',component:RegisterComponent},

  { path:'login',component:LoginComponent},
  { path:'logout',component:LoginComponent},
]




@NgModule({
 
  declarations: [LoggingModuleComponent, 
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
})
export class LoggingModuleModule { }