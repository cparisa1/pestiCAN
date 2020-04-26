import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { SupportComponent } from './support/support.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { PesticidesComponent } from './pesticides/pesticides.component';
import { PesticidesInfoComponent } from './pesticides-info/pesticides-info.component';
import { MyPesticidesComponent } from './my-pesticides/my-pesticides.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    SupportComponent,
    CheckoutComponent,
    CartComponent,
    OrderconfirmationComponent,
    PesticidesComponent,
    PesticidesInfoComponent,
    MyPesticidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
