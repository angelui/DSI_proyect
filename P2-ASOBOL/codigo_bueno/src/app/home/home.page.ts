import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {InicioSesionPage} from '../inicio-sesion/inicio-sesion.page';
import {RegistroPage} from '../registro/registro.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController){

  }

  InicioSesion():void{

    this.navCtrl.push(InicioSesionPage);
  }

  Registro():void{
    this.navCtrl.push(RegistroPage);
  }
}
