import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPacientePage } from '../pagina-paciente/pagina-paciente';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

  iniciarSesion(){
    this.navCtrl.push(PaginaPacientePage);
  }

}
