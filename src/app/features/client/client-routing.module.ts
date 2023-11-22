import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageAddOrEditClientComponent } from './page-add-or-edit-client/page-add-or-edit-client.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent },
  // { path: ':id', component: PageDetailsClientComponent }
  { path: ':id', component: PageAddOrEditClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
