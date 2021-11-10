import {
  Injectable
} from '@angular/core';
import {
  Stock,
  addFormInterface,
  updateFormInterface
} from 'src/app/models/stock';
import {
  HttpClient
} from "@angular/common/http";
import {
  Observable
} from "rxjs";
import {
  AccessService
} from './access.service';
import {
  MessagesService
} from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class StocksServiceService {
  private _stocks: Stock[] = []

  constructor(public http: HttpClient, private messageService: MessagesService,
    private accessService: AccessService) {}

  public get stocks(): Stock[] {
    return this._stocks;
  }

  public getItems(): void {
    if (!this.accessService.token)
      throw new Error("You need access token for this request");
    const request = this.http.get("http://localhost:3000/api/stock", {
      headers: {
        "X-AUTH-HEADER": this.accessService.token
      },
      params: {
        testParam: 123
      }
    });

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._stocks = response;
    });
  }

  public postStock(stock: addFormInterface): Observable < any > {
    if (!this.accessService.token)
      throw new Error("You need access token for this request");

    const request = this.http.post("http://localhost:3000/api/stock",
      stock, {
        headers: {
          "X-AUTH-HEADER": this.accessService.token
        }
      });
    return request;

  }

  public updateStock(stock: updateFormInterface, code: string): Observable < any > {
    if (!this.accessService.token)
      throw new Error("You need access token for this request");

    const request = this.http.patch(`http://localhost:3000/api/stock/${code}`, stock, {
      headers: {
        "X-AUTH-HEADER": this.accessService.token
      }
    });
    console.log("Update stock response:", request);
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
