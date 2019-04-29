import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComunidadAsobolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunidad-asobol',
  templateUrl: 'comunidad-asobol.html',
})
export class ComunidadAsobolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunidadAsobolPage');
  }

  dietas(){
    window.location.href='https://www.sinazucar.org/';
  }

  noticias(){
    window.location.href='https://elpais.com/tag/azucar/a';
  }

  foro(){
    window.location.href='https://www.diabetesforo.com/';
  }

}
