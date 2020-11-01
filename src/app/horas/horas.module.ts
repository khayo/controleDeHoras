import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

import { HoraService } from "./shared";
import { ListarHoraComponent } from './listar';
import { CadastrarHoraComponent } from './cadastrar';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './shared/form-debug';


@NgModule({
  declarations: [
    ListarHoraComponent,
    CadastrarHoraComponent,
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
