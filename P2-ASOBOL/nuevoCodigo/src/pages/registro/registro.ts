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

  public paciente:boolean = true;
  public doctor:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  actualizarPaciente(){
    console.log(this.paciente);
    if(this.paciente == false){
      this.doctor=true;
      this.paciente=false;
    }
    if(this.paciente == true){
      this.doctor=false;
      this.paciente=true;
    }
  }

  actualizarDoctor(){
    console.log(this.doctor);
    if(this.doctor == false){
      this.doctor=false;
      this.paciente=true;
    }
    if(this.doctor == true){
      this.doctor=true;
      this.paciente=false;
    }
  }


}
