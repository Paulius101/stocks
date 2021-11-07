import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  StocksServiceService
} from 'src/app/services/stocks-service.service';
import {
  Stock,
  updateFormInterface
} from 'src/app/models/stock';
import {
  MessagesService
} from 'src/app/services/messages.service';
import {
  NotificationType
} from 'src/app/models/notification';
import {
  ActivatedRoute, Router
} from '@angular/router';

@Component({
  selector: 'app-modify-stock',
  templateUrl: './modify-stock.component.html',
  styleUrls: ['./modify-stock.component.scss']
})
export class ModifyStockComponent implements OnInit {
  public code!: string;

  constructor(public stockService: StocksServiceService, public messageService: MessagesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code']
  }

  public updateStock(form: NgForm): void {
    if (form.invalid) {
      console.log("Neteisingai įvesti duomenys!");
      this.messageService.postMessage({
        message: "Invalid form data!",
        type: NotificationType.Error
      });
      return;
    }
   

    const stockPrice = form.controls.stockPrice.value;

    const stockExchange = form.controls.stockExchange.value

    const favorite = form.controls.stockFavorite.value

    



    const stock: updateFormInterface = {
      price: stockPrice,
      exchange: stockExchange,
      favorite:(favorite==='1')
    };


    this.stockService.updateStock(stock, this.code).subscribe(() => {


      this.messageService.postMessage({
        message: `Stock information updated`,
        type: NotificationType.Success
      });

      form.form.reset();
      this.router.navigate(['/'])
    });

  }
}
