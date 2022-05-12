import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustompipePipe } from './Pipes/Creditcardpipe.pipe';

import { IDNumberPipe } from './Pipes/idnumber.pipe';

import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceeptorService } from './Services/token-interceeptor.service';

import { UserAPIService } from './Services/user-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
   
    
    CustompipePipe,
   
    IDNumberPipe,
  
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
  
   
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
   
  providers: [
    UserAPIService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceeptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
