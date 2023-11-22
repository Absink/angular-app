import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageAddOrderBisComponent } from './page-add-order-bis/page-add-order-bis.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'edit/:id', component: PageDetailsOrderComponent },
  // { path: 'add', component: PageAddOrderComponent }
  { path: 'add', component: PageAddOrderBisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
