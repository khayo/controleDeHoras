import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ArquivoService } from './shared';
import { ListarArquivoComponent } from './listar';
import { CriarArquivoComponent } from './criar';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    ListarArquivoComponent,
    CriarArquivoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule 
  ],
  providers: [
    ArquivoService
  ]
})
export class ArquivoModule { }
