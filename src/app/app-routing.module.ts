import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './features/others/page-home/page-home.component';
import { PageNotFoundComponent } from './features/others/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
