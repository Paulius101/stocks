import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { StocksServiceService } from 'src/app/services/stocks-service.service';
import { Stock, addFormInterface } from 'src/app/models/stock';
import { MessagesService } from 'src/app/services/messages.service';
import { NotificationType } from 'src/app/models/notification';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  constructor(private stockService:StocksServiceService, messageService:MessagesService) { }

  ngOnInit(): void {
  }

    public addStock(form: NgForm): void {
    if (form.invalid) {
      console.log("Neteisingai įvesti duomenys!");
      return;
    }

    const stockName = form.form.controls.stockName.value;
    const stockCode = form.form.controls.stockCode.value;
    const stockPrice = form.form.controls.stockPrice.value;
    const stockExchange = form.form.controls.stockExchange.value

    const stock: addFormInterface= {
      name: stockName,
      code: stockCode,
      price: stockPrice,
      exchange:stockExchange
    };

    console.log(stock);

    this.stockService.postStock(stock).subscribe((response) => {

      this.messageService.postMessage({
        message: `Stock ${response.name} added with price ${response.price}`,
        type: NotificationType.Success
      });

      form.form.reset();
    });
  }
}