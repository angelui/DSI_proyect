import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

  notificaciones = [
    {
      name: 'Revisiones doctor',
      selected: true
    },
    {
      name: 'Subida de nivel',
      selected: true
    },
    {
      name: 'Alarma nueva introducción de datos',
      selected: true
    },
    {
      name: 'Resumen registro diario',
      selected: true
    },
    {
      name: 'Resumen registros semanales',
      selected: true
    },
    {
      name: 'Resumen registros mensuales',
      selected: true
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
  }

}
