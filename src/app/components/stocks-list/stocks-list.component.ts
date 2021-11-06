import { Component, OnInit } from '@angular/core';
import { StocksServiceService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  constructor(public stocksService:StocksServiceService) { }

  ngOnInit(): void {
  }

  
}
