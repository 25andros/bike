import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtaComponent } from './wta/wta.component';
import { GearInchComponent } from './gear-inch/gear-inch.component';



@NgModule({
  declarations: [
    WtaComponent,
    GearInchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
