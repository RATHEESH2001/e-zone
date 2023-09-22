import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Iphone14Component } from './iphone14/iphone14.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SamsungS23Component } from './samsung-s23/samsung-s23.component';
import { VivoV27ProComponent } from './vivo-v27-pro/vivo-v27-pro.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartGadgetsComponent } from './smart-gadgets/smart-gadgets.component';
import { TravelEasyComponent } from './travel-easy/travel-easy.component';
import { GroomingStoreComponent } from './grooming-store/grooming-store.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { SmartWatchesComponent } from './smart-watches/smart-watches.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  
  {
    path:'iphone14',
    component:Iphone14Component
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {path:'samsung-s23',
  component:SamsungS23Component
    
  },
  {
    path:'vivo-v27-pro',
    component:VivoV27ProComponent
  },{
    path:'xiaomi',
    component:XiaomiComponent
  },
  {
    path:'laptops',
    component:LaptopsComponent
  },
  {
    path:'smart-gadgets',
    component:SmartGadgetsComponent
  },
  {
    path:'travel-easy',
    component:TravelEasyComponent
  },
  {
    path:'groming-store',
    component:GroomingStoreComponent
  },
  {
    path:'accessories',
    component:AccessoriesComponent
  },
  {
    path:'mobiles',
    component:MobilesComponent
  },
  {
    path:'smart-watches',
    component:SmartWatchesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
