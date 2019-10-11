import {NgModule} from '@angular/core';

import {CustomerComponent} from './customer/customer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemComponent} from './item/item.component';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {OrderComponent} from './order/order.component';
import {SingupComponent} from './singup/singup.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'customer', component: CustomerComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrderComponent}
    ]
  },
  {path: 'singup', component: SingupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [CustomerComponent, DashboardComponent];
