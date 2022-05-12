import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/CustomValidatorCross/Password_Confirm';
import { UserAPIService } from 'src/app/Services/user-api.service';


import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  newuser: User={} as User;
  constructor(private fb:FormBuilder, private usrApiService: UserAPIService
    , private router:Router) {


    this.userRegisterFormGroup = fb.group({
  
      userName: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],

     
      password:['',Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ],
      ConfirmPassword: [''],

      


    },{ validators: passwordMatchValidator });




  }

  ngOnInit(): void {
  }
 
  get userName() {
    return this.userRegisterFormGroup.controls['userName'];
  }
  

  
  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }
  get ConfirmPassword() {
    return this.userRegisterFormGroup.controls['ConfirmPassword'];
  }

 

  

  
  register()
  {
    this.usrApiService.registeruser(this.userRegisterFormGroup.value).subscribe
    (res=>console.log(res));

    this.router.navigate(['/Login/login']);
      
    
  }
  
}

