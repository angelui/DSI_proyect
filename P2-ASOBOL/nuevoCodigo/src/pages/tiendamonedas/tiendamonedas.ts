import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjustesPage } from '../ajustes/ajustes';

/**
 * Generated class for the TiendamonedasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiendamonedas',
  templateUrl: 'tiendamonedas.html',
})
export class TiendamonedasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendamonedasPage');
  }

  ajustes(){
    this.navCtrl.push(AjustesPage);
  }

}
