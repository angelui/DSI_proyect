import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import { RegistroPage } from '../registro/registro';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  InicioSesion(){
  	this.navCtrl.push(InicioSesionPage);
  }

  Registro(){
    this.navCtrl.push(RegistroPage);
  }

  Ajustes(){
    this.navCtrl.push(AjustesPage);
  }
}
