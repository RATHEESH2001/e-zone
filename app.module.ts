import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { Iphone14Component } from './iphone14/iphone14.component';
import { SamsungS23Component } from './samsung-s23/samsung-s23.component';
import { VivoV27ProComponent } from './vivo-v27-pro/vivo-v27-pro.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { SmartGadgetsComponent } from './smart-gadgets/smart-gadgets.component';
import { TravelEasyComponent } from './travel-easy/travel-easy.component';
import { GroomingStoreComponent } from './grooming-store/grooming-store.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SmartWatchesComponent } from './smart-watches/smart-watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    Iphone14Component,
    SamsungS23Component,
    VivoV27ProComponent,
    LaptopsComponent,
    XiaomiComponent,
    SmartGadgetsComponent,
    TravelEasyComponent,
    GroomingStoreComponent,
    MobilesComponent,
    AccessoriesComponent,
    SmartWatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
