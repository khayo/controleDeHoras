import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';
import { CadastrarHoraComponent } from './cadastrar';
import { EditarHoraComponent } from './editar';

import { FormDebugComponent } from './shared/form-debug';


@NgModule({
  declarations: [
    ListarHoraComponent,
    CadastrarHoraComponent,
    EditarHoraComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IonicModule    
  ],
  providers: [
    HoraService
  ]
})
export class HorasModule { }
