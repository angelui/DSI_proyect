import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Datos } from '../../models/datos.model';
import { DatosService } from '../../services/datos-service';

/**
 * Generated class for the PaginaInsertarMedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-insertar-med',
  templateUrl: 'pagina-insertar-med.html',
})
export class PaginaInsertarMedPage {

  str: string;
  num: number;
  formContent = {
    fecha: Date,
    hora: Date,
    azucar: this.num,
    hemoglobina: this.num,
    ud_pan: this.num,
    peso: this.num,
    pulso: this.num,
    sistolica: this.num,
    diastolica: this.num,
    notas: this.str
}
  dato = new Datos(); 

  constructor(public navCtrl: NavController, public navParams: NavParams, private DatosService: DatosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaInsertarMedPage');
  }

  addMedida(){
    
    this.dato.fecha = String(this.formContent.fecha);
    this.dato.hora = String(this.formContent.hora);
    this.dato.azucar = this.formContent.azucar;
    this.dato.hemoglobina = this.formContent.hemoglobina;
    this.dato.ud_pan = this.formContent.ud_pan;
    this.dato.peso = this.formContent.peso;
    this.dato.pulso = this.formContent.pulso;
    this.dato.sistolica = this.formContent.sistolica;
    this.dato.diastolica = this.formContent.diastolica;
    this.dato.notas = this.formContent.notas;

    console.log(this.dato);

    this.DatosService.addDato(this.dato);

    this.navCtrl.pop();
  }

}
