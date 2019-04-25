import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { CerrarSesionPage } from '../cerrar-sesion/cerrar-sesion';
import { CompartirPage } from '../compartir/compartir';
import { ConocenosPage } from '../conocenos/conocenos';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { ExportarDatosPage } from '../exportar-datos/exportar-datos';
import { IdiomaPage } from '../idioma/idioma';
import { MonedasNivelPage } from '../monedas-nivel/monedas-nivel';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { PrivacidadPage } from '../privacidad/privacidad';
import { TemaPage } from '../tema/tema';
import { TerminosCondicionesPage } from '../terminos-condiciones/terminos-condiciones';
import { TipoUnidadPage } from '../tipo-unidad/tipo-unidad';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  MostrarEditarPerfil(){
    this.navCtrl.push(EditarPerfilPage);
  }

  MostrarTipoUnidad(){
    this.navCtrl.push(TipoUnidadPage);
  }

  MostrarPrivacidad(){
    this.navCtrl.push(PrivacidadPage);
  }

  MostrarNotificaciones(){
    this.navCtrl.push(NotificacionesPage);
  }
  
  MostrarTema(){
    this.navCtrl.push(TemaPage);
  }

  MostrarIdioma(){
    this.navCtrl.push(IdiomaPage);
  }
  
  MostrarExportarDatos(){
    this.navCtrl.push(ExportarDatosPage);
  }
  
  MostrarMonedasNivel(){
    this.navCtrl.push(MonedasNivelPage);
  }
  
  MostrarTerminosCondiciones(){
    this.navCtrl.push(TerminosCondicionesPage);
  }
  
  MostrarCompartir(){
    this.navCtrl.push(CompartirPage);
  }

  MostrarConocenos(){
    this.navCtrl.push(ConocenosPage);
  }
  
  CerrarSesion(){
    this.navCtrl.push(CerrarSesionPage);
  }




}
