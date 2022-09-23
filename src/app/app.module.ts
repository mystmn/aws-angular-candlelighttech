import { NgModule } from '@angular/core' 
import { BrowserModule } from '@angular/platform-browser' 

import { AppRoutingModule } from './app-routing.module' 
import { AppComponent } from './app.component' 
import { HomeComponent } from './pages/home/home.component' 
import { NavComponent } from './nav/nav.component' 
import { BaseComponent } from './base/base.component' 
import { CardImagesComponent } from './modules/card-images/card-images.component' 
import { MenuNavigationComponent } from './pages/menu-navigation/menu-navigation.component' 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BaseComponent,
    CardImagesComponent,
    MenuNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
