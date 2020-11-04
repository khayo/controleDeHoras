import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FormDebugComponent
  ]
})
export class SharedModule { }
