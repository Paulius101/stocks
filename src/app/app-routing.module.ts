import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { AddStockComponent} from './components/add-stock/add-stock.component'
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { ModifyStockComponent } from './components/modify-stock/modify-stock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
    {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
    {
    path: 'list',
    component: StocksListComponent,
  },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'stock-card/:code',
    component:StockInfoComponent
  },
  {
    path:'add-stock',
    component:AddStockComponent,
    // canActivate: [LoginGuard]
  },
  {
    path:'update-stock/:code',
    component:ModifyStockComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
