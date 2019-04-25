import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportarDatosPage } from './exportar-datos';

@NgModule({
  declarations: [
    ExportarDatosPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportarDatosPage),
  ],
})
export class ExportarDatosPageModule {}
