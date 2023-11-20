import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './others/page-home/page-home.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
