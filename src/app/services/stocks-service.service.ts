import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StocksServiceService {
private _stocks: Stock[] = []

  constructor(public http: HttpClient) { }

  public getItems(): void {
    const request = this.http.get("http://localhost:3000/api/stock");

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._stocks = response;
    });
  }
}
