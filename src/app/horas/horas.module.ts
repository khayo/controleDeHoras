import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';
import { CadastrarHoraComponent } from './cadastrar';
import { EditarHoraComponent } from './editar';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    ListarHoraComponent,
    CadastrarHoraComponent,
    EditarHoraComponent  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule    
  ],
  providers: [
    HoraService
  ]
})
export class HorasModule { }
