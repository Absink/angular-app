import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './features/others/page-home/page-home.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "**", component: PageHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
