import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAddOrderBisComponent } from './page-add-order-bis/page-add-order-bis.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageDetailsOrderComponent,
    PageAddOrderComponent,
    PageAddOrderBisComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
