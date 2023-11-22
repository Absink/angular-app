import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './features/others/page-home/page-home.component';
import { PageNotFoundComponent } from './features/others/page-not-found/page-not-found.component';
import { ControlsGuard } from './core/controls.guard';
import { PageLoginComponent } from './core/components/page-login/page-login.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'home', canActivate: [ControlsGuard], component: PageHomeComponent },
  { path: 'orders', canActivate: [ControlsGuard], loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', canActivate: [ControlsGuard], loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
