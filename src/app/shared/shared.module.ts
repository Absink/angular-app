import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconLoginComponent } from './components/icon-login/icon-login.component';
import { IconFooterComponent } from './components/icon-footer/icon-footer.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableLightComponent,
    TotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
