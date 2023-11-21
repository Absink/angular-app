import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public order: Order = new Order();

  ngOnInit(): void {
    this.order.id = 1; this.order.nbJours = 5; this.order.comment = "blakdlfld";
  }

}
