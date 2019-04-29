import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { PaginaPacientePage } from '../pagina-paciente/pagina-paciente';
import { Pacientes } from '../../models/pacientes.model';
import { PacientesService } from '../../services/pacientes-service';
import { Doctores } from '../../models/doctores.model';
import { DoctoresService } from '../../services/doctores-service';
import { Observable } from 'rxjs/Observable';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})

export class InicioSesionPage {

  pacientes: Pacientes[] = [];
  
  str: string;
  pacienteValue = {correo: this.str, contrasena: this.str};

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacienteService: PacientesService, public alertController: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

  iniciarSesion(){
    this.navCtrl.push(PaginaPacientePage);
  }

  
  logIn(){
    this.pacienteService.getPacientes().snapshotChanges().subscribe(item =>{
      this.pacientes = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key
        let y = x as Pacientes
        console.log(y.correoElectronico);
        console.log(y.contrasena);
        console.log(this.pacienteValue.correo);
        console.log(this.pacienteValue.contrasena);
        if(y.correoElectronico == this.pacienteValue.correo){
          if(y.contrasena == this.pacienteValue.contrasena){
            this.navCtrl.push(PaginaPacientePage);
          }else{
            let alert = this.alertController.create({
              title: 'La contraseña introducida es incorrecta.' ,
              buttons: ['OK']
            });
            alert.present();
          }
        }else{
          let alert = this.alertController.create({
            title: 'El correo introducido es incorrecto o no está registrado.' ,
            buttons: ['OK']
          });
          alert.present();
        }
        //this.pacientes.push(x as Pacientes)
      })
    });
  }


  

}
