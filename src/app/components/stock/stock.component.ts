import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock[stock]',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
@Input()
  public stock!: Stock;


  constructor() { 
  }

  ngOnInit(): void {
  }

}
