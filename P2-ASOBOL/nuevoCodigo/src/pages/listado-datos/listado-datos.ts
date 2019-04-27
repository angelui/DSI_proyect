import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Datos } from '../../models/datos.model';
 

/**
 * Generated class for the ListadoDatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-datos',
  templateUrl: 'listado-datos.html',
})
export class ListadoDatosPage {

  public datos: Datos[] = [{"fecha":"1","hora":"1","azucar":1,"hemoglobina":1,"peso":1,"pulso":1,"sistolica":1,"diastolica":1,"notas":"njpwienvlejv\nkoevnwepov"},
  {"fecha":"2","hora":"2","azucar":2,"hemoglobina":2,"peso":2,"pulso":2,"sistolica":2,"diastolica":2,"notas":"njpwienvlejv\nkoevnwepov"}];


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController ) {
    //this.datos = this.DatosService.getDatos();
  }

    presentAlert(data) {
      let alert = this.alertController.create({
        title: data.fecha + ' ' + data.hora ,
        subTitle: data.azucar,
        message:'<p>' + 'Hemoglobina: ' + data.hemoglobina  +  '<p>' + '<p>'+
                'Peso: ' + data.peso + '<p>' + '<p>'+
                'Pulso: ' + data.pulso + '<p>' + '<p>'+
                'Presión Sistólica: ' + data.sistolica + '<p>' + '<p>'+
                'Presión Diastólica: ' + data.diastolica + '<p>' + '<p>'+
                'Notas: ' + data.notas +'<p>',
        buttons: ['OK']
      });
      alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoDatosPage');
  }


  /*Cuando se implemente el firebase tenemos que pasar todos los datos recogidos a string */

}
