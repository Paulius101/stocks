import {
  Component,
  OnInit
} from '@angular/core';
import {
  gsap
} from 'gsap';
import {
  StocksServiceService
} from 'src/app/services/stocks-service.service';
import {
  AccessService
} from 'src/app/services/access.service';
import {
  Stock,
  searchStock
} from 'src/app/models/stock'
import {
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  public stockName = '';
  constructor(public stocksService: StocksServiceService, public accessService: AccessService) {}

  ngOnInit(): void {
    const listAnim = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });
    listAnim.fromTo(".content", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    }, "3");

    this.stocksService.getItems()

  }

}
