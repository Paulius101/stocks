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

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  constructor(public stocksService: StocksServiceService) {}

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
  }
}
