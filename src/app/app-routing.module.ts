import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { AddStockComponent} from './components/add-stock/add-stock.component'
import { StockInfoComponent } from './components/stock-info/stock-info.component';

const routes: Routes = [
    {
    path: '',
    component: StocksListComponent
  },
  {
    path:'stock-card/:code',
    component:StockInfoComponent
  },
  {
    path:'add-stock',
    component:AddStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
