import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PainelService } from './shared';
import { SharedModule } from '../shared';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule
  ],
  providers: [
    PainelService
  ]
})
export class PainelControleModule { }
