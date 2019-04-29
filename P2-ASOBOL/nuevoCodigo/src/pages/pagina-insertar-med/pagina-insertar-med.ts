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
  public emailpa: string = "v@v.v";
  public emailpb: string = "c@c.c";
  str: string;
  num: number;
  formContent = {
    fecha: String(Date),
    hora: String(Date),
    azucar: this.num,
    hemoglobina: this.num,
    ud_pan: this.num,
    peso: this.num,
    pulso: this.num,
    sistolica: this.num,
    diastolica: this.num,
    notas: this.str,
    email: this.str = this.emailpa
}
  dato = new Datos(); 

  constructor(public navCtrl: NavController, public navParams: NavParams, private DatosService: DatosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaInsertarMedPage');
  }

  addMedida(){

    console.log(this.formContent);

    this.DatosService.addDato(this.formContent);

    this.navCtrl.pop();
  }

}
