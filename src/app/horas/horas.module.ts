import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';
import { IonicModule } from "@ionic/angular";



@NgModule({
  declarations: [
    ListarHoraComponent
  ],
  imports: [
    CommonModule,
    IonicModule    
  ],
  providers: [
    HoraService
  ]
})
export class HorasModule { }
