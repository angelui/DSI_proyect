import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosPacientePage } from './datos-paciente';

@NgModule({
  declarations: [
    DatosPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(DatosPacientePage),
  ],
})
export class DatosPacientePageModule {}
