import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, private PacientesService:PacientesService) {
  this.getPacientes();
  }

  getPacientes(){
    this.PacientesService.getPacientes().snapshotChanges().subscribe(item =>{
      this.pacientesdelaBase =[];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.pacientesdelaBase.push(x as Pacientes)
      })
    });
  }
/*
  getPacientes(){
    return this.pacientesDeLaBase=this.firebase.list('Pacientes');
  }

  actualizarFecha(dato: Datos){
    this.datosDeLaBase.push({
      fecha: dato.fecha,
    });
  }

  actualizarHora(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      hora: dato.hora,
    });
  }

  actualizarAzucar(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      azucar: dato.azucar,
    });
  }
  actualizarHemoglobina(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      hemoglobina: dato.hemoglobina,
    });
  }

  actualizarPan(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      ud_pan: dato.ud_pan,
    });
  }

  actualizarPeso(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      peso: dato.peso,
    });
  }

  actualizarPulso(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      pulso: dato.pulso,
    });
  }

  actualizarSistolica(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      sistolica: dato.sistolica,
    });
  }
  actualizarDiastolica(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      diastolica: dato.diastolica,
    });
  }
  actualizarNotas(dato:Datos){
    this.datosDeLaBase.update(dato.fecha, {
      notas: dato.notas,
    });
  }

  actualizarNombre(pacientes:Pacientes){
    this.pacientesDeLaBase.update(pacientes.nombre,{
      nombre: pacientes.nombre,
    });
  }

  actualizarApellidos(pacientes: Pacientes){
    this.datosDeLaBase.push({
      apellidos: pacientes.apellidos,
  });
  }

  actualizarCorreo(pacientes: Pacientes){
    this.datosDeLaBase.push({
      correoElectronico: pacientes.correoElectronico,
  });
  }
  actualizarContrasena(pacientes: Pacientes){
    this.datosDeLaBase.push({
      contrasena: pacientes.contrasena,
  });
  }
  actualizarTelefono(pacientes: Pacientes){
    this.datosDeLaBase.push({
      telefono: pacientes.telefono,
  });
  }
  actualizarEstatura(pacientes: Pacientes){
    this.datosDeLaBase.push({
      estatura: pacientes.estatura,
  });
  }
  actualizarPesoPaciente(pacientes: Pacientes){
    this.datosDeLaBase.push({
      peso: pacientes.peso,
  });
  }
  actualizarNacimiento(pacientes: Pacientes){
    this.datosDeLaBase.push({
      anoNacimiento: pacientes.anoNacimiento,
  });
  }

  borrarDatos(fecha:string){
    this.datosDeLaBase.remove(fecha);
  }

  borrarPacientes(nombre:string){
    this.pacientesDeLaBase.remove(nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }*/

}
