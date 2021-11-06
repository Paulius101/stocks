import {
  Injectable
} from '@angular/core';
import {
  Stock
} from '../models/stock';
import {
  HttpClient
} from "@angular/common/http";
import {
  Observable
} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StocksServiceService {
  private _stocks: Stock[] = []

  constructor(public http: HttpClient) {}

  public get stocks(): Stock[] {
    return this._stocks;
  }

  public getItems(): void {
    const request = this.http.get("http://localhost:3000/api/stock");

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._stocks = response;
    });
  }

  public postStock(stock: Stock): Observable < any > {
    const request = this.http.post("http://localhost:3000/api/stock", stock);

    return request;
  }

  public getStockByCode(code: string): Stock {
    const stockResult = this._stocks.find((obj: Stock) => obj.code == code)
    if (stockResult !== undefined) {
      return stockResult
    }
    return this._stocks[0]
  }

}
