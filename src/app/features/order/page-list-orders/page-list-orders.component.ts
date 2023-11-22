import { Component, OnInit } from '@angular/core';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public orders: Order[] = [];
  public enTetes: string [] = [
    'ID', 'Client', 'Jours', 'Date', 'HT', 'TTC', 'Etat'];
  
  public bntRoute: BtnI = { label: 'Add', route: 'add', color: 'red'};
  public bntHref: BtnI = { label: 'Go to Ecosia', href: 'https://www.ecosia.org'};
  public bntAction: BtnI = { label: 'Action', action: true, color: 'green'};


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.collection.subscribe(datas => {
      this.orders = datas;
      console.log( this.orders);
    })
    
  }


  public testAction(): void {
    console.log("TEST !");
  }

}
