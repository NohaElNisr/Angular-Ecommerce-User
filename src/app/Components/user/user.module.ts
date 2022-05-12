import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { EditUserProfileComponent } from './EditUserProfile/EditUserProfile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'/User/Profile',pathMatch:'full'},

  {path:'Profile',component:UserProfileComponent},
  // {path:'Profile',component:UserProfileComponent},

  {path:'EditProfile',component:EditUserProfileComponent}
]

@NgModule({
  declarations: [ 
    UserProfileComponent ,
    EditUserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
