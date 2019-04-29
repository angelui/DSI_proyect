import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Datos } from '../../models/datos.model';
import { DatosService } from '../../services/datos-service';
import { PacientesService } from '../../services/pacientes-service';
import { DoctoresService } from '../../services/doctores-service';

/**
 * Generated class for the DatosPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-paciente',
  templateUrl: 'datos-paciente.html',
})
export class DatosPacientePage {

  public datos: Datos[] = [];
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, private DatosService:DatosService, private PacientesPage:PacientesService, private DoctorPage:DoctoresService) {

  }

  ionViewWillEnter() {
    //this.datos = this.DatosService.getDatos();
  }

  presentAlert(data: Datos) {
    let alert = this.alertController.create({
      title: 'Medición' ,
      subTitle: data.fecha + ' ' + data.hora,
      message:'<p>' + 'Azucar: ' + data.azucar  +  '<p>' + '<p>'+
              'Hemoglobina: ' + data.hemoglobina  +  '<p>' + '<p>'+
              'Unidades de pan: ' + data.ud_pan  +  '<p>' + '<p>'+
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

  findPaciente(){
    this.DatosService.getDatos().snapshotChanges().subscribe(item =>{
      this.datos = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key
        let y = x as Datos
        if(y.email == this.email) this.datos.push(x as Datos);
      })
    });
  }

}
