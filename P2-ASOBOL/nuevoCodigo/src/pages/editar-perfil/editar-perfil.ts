import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Datos} from '../../models/datos.model';
import {Pacientes} from '../../models/pacientes.model';
import {DatosService} from '../../services/datos-service';
import { PacientesService } from '../../services/pacientes-service';

/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  public pacientesdelaBase:Pacientes[]=[];
  public email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController, public firebase:AngularFireDatabase, private PacientesService:PacientesService) {
    this.email = this.PacientesService.email;
    this.getPacientes();
  }

  getPacientes(){
    this.PacientesService.getPacientes().snapshotChanges().subscribe(item =>{
      this.pacientesdelaBase =[];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        let y = x as Pacientes;
        if(y.correoElectronico == this.email) this.pacientesdelaBase.push(x as Pacientes);
      })
    });
  }
  
  LlamarPopUp() {
    let paciente = this.pacientesdelaBase[0];
    let alert = this.alertController.create({
      title: 'Registro' ,
      subTitle: paciente.nombre + ' ' + paciente.apellidos,
      message:'<p>' + 'Correo electrónico: ' + paciente.correoElectronico  +  '<p>' + '<p>'+
              'Contraseña: ' + paciente.contrasena  +  '<p>' + '<p>'+
              'Teléfono: ' + paciente.telefono  +  '<p>' + '<p>'+
              'Estatura: ' + paciente.estatura + '<p>' + '<p>'+
              'Peso: ' + paciente.peso + '<p>' + '<p>'+
              'Año de nacimiento: ' + paciente.anoNacimiento + '<p>' + '<p>',
      buttons: ['OK']
    });
    alert.present();

  }

  EditarDatos(paciente:Pacientes){
    for(let i=0;i<this.pacientesdelaBase.length;i++){
      if(this.pacientesdelaBase[i].nombre==paciente.nombre){
        this.pacientesdelaBase[i]=paciente;
      }
    }
  }
}
