import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';
import { CadastrarHoraComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarHoraComponent,
    CadastrarHoraComponent
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
