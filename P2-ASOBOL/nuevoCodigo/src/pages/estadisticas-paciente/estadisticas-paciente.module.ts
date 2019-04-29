import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadisticasPacientePage } from './estadisticas-paciente';

@NgModule({
  declarations: [
    EstadisticasPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(EstadisticasPacientePage),
  ],
})
export class EstadisticasPacientePageModule {}
