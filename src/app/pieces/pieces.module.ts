import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestComponent } from './rest/rest.component';


import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports:[
    RestComponent,
  ]
})

export class PiecesModule { }
