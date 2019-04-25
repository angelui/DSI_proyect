import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  /*checkboxs = [
    {
      name: 'Paciente',
      selected: true
    },
    {
      name: 'Doctor',
      selected: false
    },
  ];*/

  paciente = true;
  doctor = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  actualizarPaciente(){

  }

  actualizarDoctor(){
  }

}
