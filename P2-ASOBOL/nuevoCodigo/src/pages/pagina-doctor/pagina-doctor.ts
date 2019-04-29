import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjustesPage } from '../ajustes/ajustes';
import { DatosPacientePage } from '../datos-paciente/datos-paciente';
import { EstadisticasPacientePage } from '../estadisticas-paciente/estadisticas-paciente';
import { ComunidadAsobolPage } from '../comunidad-asobol/comunidad-asobol';
import { PacientesService } from '../../services/pacientes-service';

/**
 * Generated class for the PaginaDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-doctor',
  templateUrl: 'pagina-doctor.html',
})
export class PaginaDoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private pacienteService:PacientesService) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaPacientePage');
  }

  ajustes(){
    this.navCtrl.push(AjustesPage);
  }

  listado(){
    this.navCtrl.push(DatosPacientePage);
  }

  estadisticas(){
    this.navCtrl.push(EstadisticasPacientePage);
  }

  comunidadASOBOL(){
    this.navCtrl.push(ComunidadAsobolPage);
  }

}
