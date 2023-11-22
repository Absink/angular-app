import { Component, Input } from '@angular/core';
import { Order } from '../../models/order.model';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent {

  @Input() headers: string[] = [];
  @Input() orders: Order[] = [];

  @Input() clients: Client[] = [];

}
