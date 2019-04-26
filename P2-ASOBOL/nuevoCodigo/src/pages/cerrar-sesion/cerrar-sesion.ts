import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the CerrarSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerrar-sesion',
  templateUrl: 'cerrar-sesion.html',
})
export class CerrarSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CerrarSesionPage');
  }

  VolverInicio(){
    this.navCtrl.push(HomePage);
  }
}

