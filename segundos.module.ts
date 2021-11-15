import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegundosPipe } from './segundos.pipe';



@NgModule({
  declarations: [
    SegundosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SegundosPipe
  ]
})
export class SegundosModule { }