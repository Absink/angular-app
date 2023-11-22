import { Component } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {

  public order: Order = new Order();
  public states = Object.values(StateOrder);

  constructor(private orderService: OrderService) {}

  public add(): void {
    this.orderService.add(this.order)
      .subscribe(x => console.log(x));
  }

}
