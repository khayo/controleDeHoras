import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarHoraComponent
  ],
  providers: [
    HoraService
  ]
})
export class HorasModule { }
