import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaDoctorPage } from './pagina-doctor';

@NgModule({
  declarations: [
    PaginaDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaDoctorPage),
  ],
})
export class PaginaDoctorPageModule {}
