import {
  Component,
  OnInit
} from '@angular/core';
import {
  Stock
} from 'src/app/models/stock';
import {
  ActivatedRoute
} from '@angular/router';
import {
  StocksServiceService
} from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public name!: string;
  public stockInfo!: Stock;
  constructor(public stockService: StocksServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    this.stockInfo = this.stockService.getStockByName(this.name)
    console.log(this.stockInfo);
  }

}
