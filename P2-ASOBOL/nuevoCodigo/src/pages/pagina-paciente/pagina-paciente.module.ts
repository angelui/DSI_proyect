import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaPacientePage } from './pagina-paciente';

@NgModule({
  declarations: [
    PaginaPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaPacientePage),
  ],
})
export class PaginaPacientePageModule {}
