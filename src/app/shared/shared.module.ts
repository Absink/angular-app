import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconLoginComponent } from './components/icon-login/icon-login.component';
import { IconFooterComponent } from './components/icon-footer/icon-footer.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';



@NgModule({
  declarations: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableLightComponent,
    TotalPipe,
    DaysPipe,
    ColorStateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableLightComponent,
    TotalPipe,
    DaysPipe
  ]
})
export class SharedModule { }
