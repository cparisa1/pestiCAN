import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from '../app/features/features.component';
import { SupportComponent } from '../app/support/support.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { CartComponent } from '../app/cart/cart.component';
import { OrderconfirmationComponent } from '../app/orderconfirmation/orderconfirmation.component';
import { PesticidesInfoComponent } from '../app/pesticides-info/pesticides-info.component';
import { PesticidesComponent } from '../app/pesticides/pesticides.component';
import { MyPesticidesComponent } from '../app/my-pesticides/my-pesticides.component';

const routes: Routes = [
  { path: '', component: MyPesticidesComponent },
  { path: 'pesticides', component: PesticidesComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'support', component: SupportComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cart', component: CartComponent},
  { path: 'pesticides-info', component: PesticidesInfoComponent},
  { path: 'pesticides/:id', component: PesticidesInfoComponent},
  { path: 'orderconfirmation', component: OrderconfirmationComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
