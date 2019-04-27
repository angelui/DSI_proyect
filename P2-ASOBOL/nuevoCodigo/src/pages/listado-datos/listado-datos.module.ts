import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoDatosPage } from './listado-datos';

@NgModule({
  declarations: [
    ListadoDatosPage
  ],
  imports: [
    IonicPageModule.forChild(ListadoDatosPage),
  ],
})
export class ListadoDatosPageModule {}
