import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjustesPage } from '../ajustes/ajustes';
import { ListadoDatosPage } from '../listado-datos/listado-datos';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { PaginaInsertarMedPage } from '../pagina-insertar-med/pagina-insertar-med';
import { ComunidadAsobolPage } from '../comunidad-asobol/comunidad-asobol';
import { PacientesService } from '../../services/pacientes-service';

/**
 * Generated class for the PaginaPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-paciente',
  templateUrl: 'pagina-paciente.html',
})
export class PaginaPacientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private pacienteService:PacientesService) {
    if(this.pacienteService.doctor == false){
      let id = document.getElementsByClassName('boton1');

      console.log(id)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaPacientePage');
  }

  ajustes(){
    this.navCtrl.push(AjustesPage);
  }

  listado(){
    this.navCtrl.push(ListadoDatosPage);
  }

  estadisticas(){
    this.navCtrl.push(EstadisticasPage);
  }

  insertarMed(){
    this.navCtrl.push(PaginaInsertarMedPage);
  }

  comunidadASOBOL(){
    this.navCtrl.push(ComunidadAsobolPage);
  }

}
