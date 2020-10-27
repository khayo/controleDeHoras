import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';



@NgModule({
  declarations: [
    ListarHoraComponent
  ],
  imports: [
    CommonModule    
  ],
  providers: [
    HoraService
  ]
})
export class HorasModule { }
