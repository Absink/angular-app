import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageDetailsClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
