import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjustesPage } from '../ajustes/ajustes';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tiendamonedas',
  templateUrl: 'tiendamonedas.html',
})
export class TiendamonedasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendamonedasPage');
  }

  ajustes(){
    this.navCtrl.push(AjustesPage);
  }

  comprar(){
    let alert = this.alertController.create({
      title: 'Comprar tema' ,
      message:'¡Muy pronto podrás personalizar tu aplicación cambiando el tema por defecto!',
      buttons: ['Cancelar']
    });
    alert.present();
  }

}
