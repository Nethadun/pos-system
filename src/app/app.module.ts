import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SingupComponent } from './singup/singup.component';
import {FilterPipe} from './search-pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    MainComponent,
    NavComponent,
    SideComponent,
    ItemComponent,
    OrderComponent,
    LoginComponent,
    SingupComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
