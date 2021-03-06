import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockComponent } from './components/stock/stock.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { MessagesComponent } from './components/messages/messages.component';
import {FormsModule} from "@angular/forms";
import { OpeningEffectComponent } from './components/opening-effect/opening-effect.component';
import { ModifyStockComponent } from './components/modify-stock/modify-stock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent,
    StockComponent,
    StockInfoComponent,
    AddStockComponent,
    MessagesComponent,
    OpeningEffectComponent,
    ModifyStockComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
