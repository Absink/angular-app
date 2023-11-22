import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageDetailsOrderComponent,
    PageAddOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class OrderModule { }
