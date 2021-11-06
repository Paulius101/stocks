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

  @Output()
  onStockReview!: EventEmitter<void>;

  @Output()
  onStockAmend: EventEmitter<void>;

  constructor() { 
    this.onStockReview = new EventEmitter<void>();
    this.onStockAmend = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

}
