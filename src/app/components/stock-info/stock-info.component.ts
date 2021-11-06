import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { ActivatedRoute } from '@angular/router';
import { StocksServiceService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {

public code!:string;
public stockInfo!:Stock;

  constructor(public stockService:StocksServiceService,  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code']
    this.stockInfo = this.stockService.getStockByCode(this.code)
    console.log(this.stockInfo);
  }

}
