import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPacientePage } from '../pagina-paciente/pagina-paciente';
import { Pacientes } from '../../models/pacientes.model';
import { PacientesService } from '../../services/pacientes-service';
import { Doctores } from '../../models/doctores.model';
import { DoctoresService } from '../../services/doctores-service';
import { PaginaDoctorPage } from '../pagina-doctor/pagina-doctor';

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


  public paciente:boolean = true;
  public doctor:boolean = false;
  
  str: string;
  pacienteValue = {correo: this.str, contrasena: this.str};

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacienteService: PacientesService, private doctorService: DoctoresService, public alertController: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

  iniciarSesion(){
    this.navCtrl.push(PaginaPacientePage);
  }
  
  logIn(){
    if(this.paciente == true){
      this.pacienteService.getPacientes().snapshotChanges().subscribe(item =>{
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
              this.pacienteService.addEmail(y.correoElectronico);
              this.navCtrl.push(PaginaPacientePage);
              this.pacienteService.doctor=false;
            }else{
              let alert = this.alertController.create({
                title: 'La contraseña introducida es incorrecta.' ,
                buttons: ['OK']
              });
            }
          }else{
            let alert = this.alertController.create({
              title: 'El correo introducido es incorrecto o no está registrado.' ,
              buttons: ['OK']
            });
            alert.present();
          }
        })
      });
    }
    else{
      this.doctorService.getDoctores().snapshotChanges().subscribe(item =>{
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x["$key"] = element.key
          let y = x as Doctores
          console.log(y.correoElectronico);
          console.log(y.contrasena);
          console.log(this.pacienteValue.correo);
          console.log(this.pacienteValue.contrasena);
          if(y.correoElectronico == this.pacienteValue.correo){
            if(y.contrasena == this.pacienteValue.contrasena){
              this.doctorService.addEmail(y.correoElectronico);
              this.pacienteService.doctor=true;
              this.navCtrl.push(PaginaDoctorPage);
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
        })
      });
    }
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
